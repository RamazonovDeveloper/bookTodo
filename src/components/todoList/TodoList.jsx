import React, { useState } from 'react';
import { setTodosToLocalstorage } from '../../assets/lib/localStorageTodo';
import Todo from '../todo/Todo';
import './TodoList.css'

const Todolist = () => {

    let [todos, setTodos] = useState([
        {id:1, title:"Dars qilish kerak", isCompleted:false},
        {id:2, title:"Ko'proq Dars qilish kerak", isCompleted:true},
        {id:3, title:"O'z ustimda ishlashim kerak", isCompleted:false},
        {id:4, title:"Dars qilish kerak 2", isCompleted:false},
    ])

    const handleDelete = (id) => {
        setTodos(data => {
            const newTodos = data.filter(item => item.id != id)
            setTodosToLocalstorage(newTodos)
            return newTodos
        })
    }

    const handleCheck = (id, isChecked) => {
        console.log(id+isChecked)
        setTodos(data => {
            let newTodos = data.map(item => {
                if(item.id == id){
                    item.isCompleted = isChecked
                }
                return item
            })
            setTodosToLocalstorage(newTodos)
            return newTodos
        })
        // setTodos(newTodos)
        console.log(todos)
    }

    return (
        <div className='list'>
            <form action="">
                <input type="text" />
                <button>Add</button>
            </form>
            <div>
                {
                    todos.map((item, index) => {
                        return <Todo key={index} data={item} deleteTask={handleDelete} checkTask={handleCheck} />
                    })
                }
            </div>
        </div>
    );
}

export default Todolist;
