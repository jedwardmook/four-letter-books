import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AddFormFromISBN from './AddFormFromISBN'


function SearchBook({placeholder, value, onChange, fetchAddress}) {
  const navigate = useNavigate()
  const [isbn, setIsbn] = useState('')
  const [book, setBook] = useState('')
  const [author, setAuthor] = useState('')
  const [work, setWork] = useState('')
  const [descriptionArray, setDescriptionArray] = useState([])
  const [language, setLanguage] = useState()
  const [returnedError, setReturnedError] = useState()


  //Isbn fetch function
  const submitSearch = async (e) => {
    e.preventDefault()
    const valInt = parseInt(isbn)
      if (valInt === parseInt(isbn, 10) && (isbn.length === 10 || isbn.length === 13)){
        try {
          const response = await fetch(`http://openlibrary.org/isbn/${isbn}.json`);
          const data = await response.json();
          setBook(data);
          console.log(data);
          splitAuthor(data);
          splitWork(data);
          const splitLanguage = data.languages[0]
          setLanguage(Object.values(splitLanguage))
        } catch (error) {
          console.log("No ISBN found")
        }
      } else {
        console.log("ISBN must an 10 or 13 digit number.")
      }
    };

  //extracts author value for fetch
  const splitAuthor = (book) => {
    if (book.authors){
      const author = Object.values(book.authors[0])
      fetchAuthor(author)}
    else {
      console.log("No books.authors")
    }
  }
  
  //extracts work value for fetch
  function splitWork(book){
    if (book.works){
      const work = Object.values(book.works[0])
      fetchWork(work)}
    else {
      console.log("No books.works")
    }
  }
  
  //Author fetch sets Author in state
  const fetchAuthor = async (author) => {
    try {
    const response = await fetch(`http://openlibrary.org${author}.json`);
    const data = await response.json();
      setAuthor(data);
      console.log(data);
    } catch (error) {
        console.log(error)
      }
  }

  //Work fetch set description in state using checkObject helper function
  const fetchWork = async (work) => {
    try {
    const response = await fetch(`http://openlibrary.org${work}.json`);
    const data = await response.json();
      setWork(data);
      console.log(data);
      const descriptions = data.description
      checkObject(descriptions)
    } catch (error) {
        console.log(error);
    }
  }

  //checks to see if data.description from fetchWork is an object
  function checkObject(arr){
    if (arr instanceof Object){
        setDescriptionArray(arr.value)
    } else {
        setDescriptionArray(arr)
    }
  }

  return (
    <div>
      <form onSubmit={submitSearch}>
        <input
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        />
        <button>Search</button>
      </form>
      <Link to="/isbn_scanner" >
            <button>Use Scanner</button>
      </Link>
      {book&&
      <AddFormFromISBN 
        book={book}
        author={author}
        work={work}
        descriptionArray={descriptionArray}
        bookLanguage={language}
      />}
    </div>
  )
}

export default SearchBook