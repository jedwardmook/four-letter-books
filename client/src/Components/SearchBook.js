import React, { useState } from 'react'
import "../Styles/searchbook.min.css"
import QrReaderContainer from './QrReaderContainer'
import { useNavigate } from 'react-router-dom'

function SearchBook() {
  const [isScanner, setIsScanner] = useState(false)
  const [isbn, setIsbn] = useState('')
  const [book, setBook] = useState('')
  const [author, setAuthor] = useState('')
  const [work, setWork] = useState('')
  const [descriptionArray, setDescriptionArray] = useState('')
  const [language, setLanguage] = useState()
  const [returnedError, setReturnedError] = useState()
  const [bookFound, setBookFound] = useState(false)
  const navigate = useNavigate()


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
          setReturnedError("No ISBN found")
        }
      } else {
        setReturnedError("ISBN must an 10 or 13 digit number.")
        }
    };

//extracts author value for fetch
const splitAuthor = (book) => {
  if (book.authors){
    const author = Object.values(book.authors[0])
    fetchAuthor(author)
  } else {
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
    setBookFound(!bookFound)
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

const onNewScanResult = (decodedText, decodedResult) => {
  console.log("App [result]", decodedResult);
  setIsbn(decodedText)
  setIsScanner(!isScanner)
};

const toAddFormFromIsbn = () => {
  navigate('/add_book_form', {state:{ book:book, author: author, work:work, descriptionArray: descriptionArray, bookLanguage: language}})
}

  return (
    <div>
    <main className='search_book_main'>
      <header className='search_book_header'>
        <h3>Search ISBN</h3>
      </header>
      <form onSubmit={submitSearch}>
        <input
          className="isbn_search_input"
          type="number"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button className="isbn_search_button">Search</button>
    </form>
      <div className='search_book_button_div'>
        <button className='search_book_scanner' onClick={() => setIsScanner(!isScanner)}>{isScanner? "Hide Scanner" : "Use Scanner" }</button>
      </div>
      {bookFound &&
        <button onClick={() => {toAddFormFromIsbn()}}>Book Found</button>}
      {returnedError&&
        <div className='search_book_error_div'>
          <div className='search_book_error_area'>
            <p>{returnedError}</p>
            <button className="search_book_error_button" onClick={() => setReturnedError("")}>Okay</button>
          </div>
        </div>}
    </main>
         {isScanner &&
          <QrReaderContainer 
            fps={10}
            qrbox={350}
            disableFlip={false}
            qrCodeSuccessCallback ={onNewScanResult}
          />}
    </div>
  )
}

export default SearchBook