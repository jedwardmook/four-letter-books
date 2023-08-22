import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EditBookPage from './EditBookPage'


function BookPage() {
  const [book, setBook] = useState()
  const [editBook, setEditBook] = useState(false)
 

  let bookId = useParams()
  let bookIdToFetch = parseInt(bookId.bookId)

  useEffect (() => {
    fetch(`/books/${bookIdToFetch}`).then((response) => {
        if (response.ok) {
          response.json().then((book) => setBook(book));
        } else {

        }
    })
  }, [bookIdToFetch])


  

  return (
    book? <main>
    <button onClick={() => setEditBook(!editBook)}>Edit Book</button>
    <table>
      <tbody>
      <tr>
        <td>Title:</td>
        <td>{book.title}</td>
      </tr>
      <tr>
        <td>Subtitle:</td>
        <td>{book.subtitle}</td>
      </tr>
      <tr>
        <td>Author:</td>
        <td>{book.author}</td> 
      </tr>
      <tr>
        <td>Description:</td>
        <td>{book.description}</td> 
      </tr>
      <tr>
        <td>Publisher:</td>
        <td>{book.publisher}</td> 
                    
      </tr>
      <tr>
        <td>Year Published:</td>
        <td>{book.year_published}</td> 
      </tr>
      <tr>
        <td>Cover Type:</td>
        <td>{book.cover_type}</td> 
                    
      </tr>
      <tr>
        <td>ISBN 10:</td>
        <td>{book.isbn_10 === 0? "N/A" : book.isbn_10}</td>             
      </tr>
      <tr>
        <td>ISBN 13:</td>
        <td>{book.isbn_13 === 0? "N/A" : book.isbn_13}</td>
      </tr>
      <tr>
        <td>Pages:</td>
        <td>{book.page_number} pages</td>
      </tr>
      <tr>
        <td>Measurements:</td>
        <td>{book.measurements}</td>
      </tr>
      <tr>
        <td>Language:</td>
        <td>{book.language}</td>
      </tr>
      <tr>
        <td>Condition:</td>
        <td>{book.condition}</td>
      </tr>
      <tr>
        <td>Price:</td>
        <td>{book.price === 0? "Not priced yet": `$${book.price}`}</td>
      </tr>
      <tr>
        <td>Genre:</td>
        <td>{book.genre1}</td>
      </tr>
      <tr>
        <td>Genre:</td>
        <td>{book.genre2}</td>
      </tr>
      <tr>
        <td>Genre:</td>
        <td>{book.genre3}</td>
      </tr>
      <tr>
        <td>In Stock:</td>
        <td>{book.quantity}</td>
      </tr>
      </tbody>
    </table>
    {editBook &&
      <EditBookPage
        book = {book}
        setBook = {setBook}
        setEditBook = {setEditBook}
        editBook = {editBook}
        />}
    </main>:<><h1>Loading</h1></>
   
  )
}

export default BookPage