import React from 'react'
import { useState } from 'react';

function Bookshelf() {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState(
        {
            title: '',
            author: ''
        }
    )

    function handleInputChange (event) {
        setNewBook({...newBook, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (newBook.title && newBook.author) {
            setBooks([...books, newBook])
            setNewBook({title: '', author: ''})
        }else {return alert('One of the inputs are empty, submit denied')}
        
    }



    
  return (
    <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form>
                <label htmlFor="title">Book Title: </label>
                <input type="text" id='title' name='title' onChange={handleInputChange} value={newBook.title}/>

                <label htmlFor="author"> Author Name: </label>
                <input type="text" name='author' onChange={handleInputChange} value={newBook.author}/>

                <button onClick={handleSubmit} className='formButton'>Add New Book</button>
            </form>
        </div>
        <div className="bookCardsDiv">
            {books.map((oneBook) => 
                <div className='bookCard'>
                    <h3>{oneBook.title}</h3>
                    <p>{oneBook.author}</p>
                </div>
        
            )}
        </div>
    </div>

  )
}

export default Bookshelf