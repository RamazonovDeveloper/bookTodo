import React from 'react';
import './Book.css'

const Book = ({bookData, onDelete}) => {


    return (
        <div className='book'>
            <h3>{bookData.title}</h3>
            <p>{bookData.price}</p>
            <button onClick={() => {onDelete(bookData.id)}}>Delete</button>
        </div>
    );
}

export default Book;
