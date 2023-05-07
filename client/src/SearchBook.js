import React, { useState } from 'react'
import AddForm from './AddForm'

function SearchBook({placeholder, value, onChange, fetchAddress}) {
  const [book, setBook] = useState('')
  const [author, setAuthor] = useState('')
  const [work, setWork] = useState('')
  const [descriptionArray, setDescriptionArray] = useState([])
  const [isbnFormDiv, setIsbnFormDiv] = useState(false)


  //Isbn fetch function
  const submitSearch = async (e) => {
    e.preventDefault()
    try {
    const response = await fetch(`${fetchAddress}${value}.json`);
    const data = await response.json();
      setBook(data);
      console.log(data);
      splitAuthor(data);
      splitWork(data);
    } catch (error) {
        console.log(error);
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
      setIsbnFormDiv(true);
    } catch (error) {
        console.log(error);
    }
  }

  //checks to see if data.description from fetchWork is an object
  function checkObject(arr){
    if (arr instanceof Object){
        setDescriptionArray(arr.value)
    }else {
        setDescriptionArray(arr)
    }
}

  //makes addForm visible
  function showAddForm(){
    setIsbnFormDiv(!isbnFormDiv)
  }

  return (
    <div>
      <form onSubmit={submitSearch}>
        <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
        <button>Search</button>
      </form>
      <button onClick={showAddForm}>Add Book Manually</button>
      {isbnFormDiv&&
      <div>
        <AddForm 
          book={book}
          author={author}
          work={work}
          descriptionArray={descriptionArray}
          />
      </div>}
    </div>
  )
}

export default SearchBook