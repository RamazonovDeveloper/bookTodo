function getBooksFromLocal(){
    return JSON.parse(localStorage.getItem('books'))
}

function setBooksToLocal(data){
    localStorage.setItem('books', JSON.stringify(data))
}

export { getBooksFromLocal, setBooksToLocal }