import React, { useState } from 'react';
import { getBooksFromLocal, setBooksToLocal } from '../../assets/lib/localstorage';
import Book from '../book/Book';
import './BookList.css'

const Booklist = () => {

    setBooksToLocal([
        {id:1,title:'Yulduzli tunlar',price:35000},
        {id:2,title:'Boburnoma',price:300000},
        {id:3,title:'Oltin silsila',price:40000},
        {id:4,title:'Hidoyat',price:15000}
    ])

    const [books, setBook] = useState(getBooksFromLocal())

    
    const handleDelete = (id) => {
        setBook(books => {
            books = books.filter(item => item.id != id)
            setBooksToLocal(books)
            return books
        })
    }

    const addBook = (evt) => { 
        evt.preventDefault()
        let inputTitle = document.querySelector('#inputTitle')
        let inputPrice = document.querySelector('#inputPrice')
        let lastItem = books[books.length - 1] || {id:0}
        if(inputPrice.value && inputTitle.value){
            let newBook = {
                id:lastItem.id + 1,
                title:inputTitle.value,
                price:inputPrice.value
            }
            setBook(books => {
                let newBooksCol = [...books, newBook]
                console.log(newBooksCol)
                setBooksToLocal(newBooksCol)
                return newBooksCol
            })
            
            inputTitle.value = ''
            inputPrice.value = ''
        }
    }

    const handle100 = () => {
        let books = getBooksFromLocal()
        books = books.filter(item => (item.price < 100000)) 
        setBook(books)
    }

    const handle200 = () => {
        let books = getBooksFromLocal()
        books = books.filter(item => (item.price < 200000 && item.price > 100000)) 
        setBook(books)
    }

    const handle500 = () => {
        let books = getBooksFromLocal()
        books = books.filter(item => (item.price < 500000 && item.price > 200000)) 
        setBook(books)
    }

    

    return (
        <div className='list'>
            <form onSubmit={evt => addBook(evt)} action="">
                <input id='inputTitle' type="text" />
                <input id='inputPrice' type="number" />
                <button>Add</button>
            </form>
            <div>
                {
                    books.length == 0 ? 'Books not found' : books.map((item, index) => { 
                        return <Book key={index} bookData={item} onDelete={handleDelete}/>
                    })
                }
            </div>
            <div>
                <button onClick={handle100}>0-100</button>
                <button onClick={handle200}>100-200</button>
                <button onClick={handle500}>200-500</button>
                <button onClick={() => {setBook(getBooksFromLocal())}}>View All</button>
            </div>
        </div>
    );
}

export default Booklist;
