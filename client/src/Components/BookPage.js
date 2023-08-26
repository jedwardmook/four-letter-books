import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EditBookPage from './EditBookPage'
import '../Styles/bookpage.min.css'


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
    book? 
    <main className="book_page_main">
      <div className="book_page_controls_div">
        <button className="book_page_edit_button" onClick={() => setEditBook(!editBook)}>{editBook? "Cancel": "Edit Book"}</button>
      </div>
      <div className="book_page_table">
      {editBook? 
      <EditBookPage
      book = {book}
      setBook = {setBook}
      setEditBook = {setEditBook}
      editBook = {editBook}
      />
      :
      <table >
        <tbody>
        <tr className="book_page_table_row">
          <td className="book_page_title">Title:</td>
          <td>{book.title}</td>
        </tr>
        <tr>
          <td className="book_page_title">Subtitle:</td>
          <td>{book.subtitle}</td>
        </tr>
        <tr>
          <td className="book_page_title">Author:</td>
          <td>{book.author}</td> 
        </tr>
        <tr>
          <td className="book_page_title">Description:</td>
          <td>{book.description}</td> 
        </tr>
        <tr>
          <td className="book_page_title">Publisher:</td>
          <td>{book.publisher}</td>              
        </tr>
        <tr>
          <td className="book_page_title">Year Published:</td>
          <td>{book.year_published}</td> 
        </tr>
        <tr>
          <td className="book_page_title">Cover Type:</td>
          <td>{book.cover_type}</td>           
        </tr>
        <tr>
          <td className="book_page_title">ISBN 10:</td>
          <td>{book.isbn_10 === 0? "N/A" : book.isbn_10}</td>             
        </tr>
        <tr>
          <td className="book_page_title">ISBN 13:</td>
          <td>{book.isbn_13 === 0? "N/A" : book.isbn_13}</td>
        </tr>
        <tr>
          <td className="book_page_title">Pages:</td>
          <td>{book.page_number} pages</td>
        </tr>
        <tr>
          <td className="book_page_title">Measurements:</td>
          <td>{book.measurements}</td>
        </tr>
        <tr>
          <td className="book_page_title">Language:</td>
          <td>{book.language}</td>
        </tr>
        <tr>
          <td className="book_page_title">Condition:</td>
          <td>{book.condition}</td>
        </tr>
        <tr>
          <td className="book_page_title">Price:</td>
          <td>{book.price === 0? "Not priced yet": `$${book.price}`}</td>
        </tr>
        <tr>
          <td className="book_page_title">Genre:</td>
          <td>{book.genre1}</td>
        </tr>
        <tr>
          <td className="book_page_title">Genre:</td>
          <td>{book.genre2}</td>
        </tr>
        <tr>
          <td className="book_page_title">Genre:</td>
          <td>{book.genre3}</td>
        </tr>
        <tr>
          <td className="book_page_title">In Stock:</td>
          <td>{book.quantity}</td>
        </tr>
        </tbody>
      </table>
      }
      </div>
    </main>:<><h1>Loading</h1></>
   
  )
}

export default BookPage