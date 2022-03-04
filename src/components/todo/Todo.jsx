import React from 'react';
import './todo.css'

const Todo = ({data, deleteTask, checkTask}) => {
    return (
        <div className='todo'>
            <input type="checkbox" onChange={evt => {checkTask(data.id, evt.target.checked)}} checked={data.isCompleted} />
            <h4>{data.title}</h4>
            <button onClick={() => {deleteTask(data.id)}}>Delete</button>
        </div>
    );
}



export default Todo;
