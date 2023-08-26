import '../Styles/addbook.min.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



function AddBook() {
    const [book, setBook] = useState({ 
      title : "", 
      subtitle : "", 
      publishers : "", 
      publish_date : "", 
      physical_format : '', 
      isbn_10 : 'isbn', 
      isbn_13 : 'isbn', 
      number_of_pages : '', 
      physical_dimensions : ''
    })
    const [author, setAuthor] = useState({name : ""})
    const [work, setWork] = useState({subjects : []})
    const [descriptionArray, setDescriptionArray] = useState([])
    const [bookLanguage, setBookLanguage] = useState('')


  //component for adding books
  return (
    <main className='add_book_main'>
      <article className='add_book_article'>
        <Link className='add_book_link' state={{book: book, author: author, work: work, descriptionArray: descriptionArray, bookLanguage: bookLanguage}} to="/add_book_form_isbn">
          <button className='add_book_button'>Add Book Manually</button>
        </Link>
        <Link className='add_book_link' to='/add_book_isbn'>
         <button className='add_book_button'>Add Book with ISBN</button>
        </Link> 
      </article> 
    </main>
  )
}

export default AddBook