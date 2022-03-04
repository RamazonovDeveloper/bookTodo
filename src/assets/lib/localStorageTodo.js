function getTodosFromLocal(){
    return JSON.parse(localStorage.getItem('todos'))
}

function setTodosToLocalstorage(data){
    localStorage.setItem('todos', JSON.stringify(data))
}

export { getTodosFromLocal, setTodosToLocalstorage }