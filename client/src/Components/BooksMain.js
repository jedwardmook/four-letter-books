import React, { useEffect, useState } from 'react'
import '../Styles/booksmain.min.css'
import BooksContainer from './BooksContainer'
import BooksFilter from './BooksFilter'


function BooksMain() {
  const [books, setBooks] = useState()
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(20)
  const [searchInputValue, setSearchInputValue] = useState()

  useEffect(() => {
      fetch('/books')
          .then((response) => {
              if (response.ok) {
              response.json().then((books) => {
                  setBooks(books)
                  });
              } else {
              }
          })
  }, [])

  // const filterBooks = books?.filter(book => {
  //   return Object.values(book).some(value =>
  //     String(value).toLowerCase().includes(searchInputValue?.toLowerCase()))
  // })

  // const filteredBooksToDisplay = filterBooks?.slice(startIndex, endIndex).map((book,index) => {
  //   return <tr className="books_main_data" key={index}>
  //           <td>{book.image_urls? <img className='books_main_image' src={book.image_urls[0].url} alt='cover'/>: ""}</td>
  //           <td className="books_main_title">{book.title}: {book.subtitle}</td>
  //           <td>{book.author}</td>              
  //           <td>{book.isbn_10 === 0? "N/A": book.isbn_10}</td>
  //           <td>{book.isbn_13 === 0 ? "N/A" : book.isbn_13}</td>
  //           <td>{book.page_number}</td>
  //           <td>{book.condition}</td>
  //           <td>{book.price}</td>
  //           <td>{book.quantity}</td>
  //           <td><Link className="books_main_link" to={`/books/${book.id}`}>details...</Link></td>
  //        </tr>
  // })

  // const booksToDisplay = books?.slice(startIndex, endIndex).map((book,index) => {
  //     return <tr className="books_main_data" key={index}>
  //             <td>{book.image_urls? <img className='books_main_image' src={book.image_urls[0].url} alt='cover'/>: ""}</td>
  //             <td className="books_main_title">{book.title}: {book.subtitle}</td>
  //             <td>{book.author}</td>              
  //             <td>{book.isbn_10 === 0? "N/A": book.isbn_10}</td>
  //             <td>{book.isbn_13 === 0 ? "N/A" : book.isbn_13}</td>
  //             <td>{book.page_number}</td>
  //             <td>{book.condition}</td>
  //             <td>{book.price}</td>
  //             <td>{book.quantity}</td>
  //             <td><Link className="books_main_link" to={`/books/${book.id}`}>details...</Link></td>
  //          </tr>
  //   })

  const searchInputOnChange = (e) => {
    setSearchInputValue(e.target.value)
  };

  function nextPage(){
    setStartIndex(startIndex + 20)
    setEndIndex(endIndex + 20)
  }  

  function lastPage(){
    setStartIndex(startIndex - 20)
    setEndIndex(endIndex - 20)
  } 

  return ( 
      <main className="books_main_main">
        <h2>Books Archived</h2>
          <BooksContainer 
            books={books}
            startIndex={startIndex}
            endIndex={endIndex}
            />
          <BooksFilter
            searchInputOnChange={searchInputOnChange}
            />
        {/* <div>
          <label htmlFor="search_books_input">Search Database</label>
          <input 
            id='search_books_input'
            placeholder='Search'
            className='books_main_search_input'
            onChange={searchInputOnChange}
            />
        </div> */}
        {/* {booksToDisplay&&
        <div className="books_main_controls_div">
          {startIndex > 0 &&<button onClick={lastPage} className="books_main_controls_button">&lt;</button>}
            <p className="books_main_controls_display">Showing: {startIndex} - {startIndex + booksToDisplay.length}</p>
          {booksToDisplay.length > endIndex - 1 &&<button onClick={nextPage} className="books_main_controls_button">&gt;</button>}
        </div>} */}
    </main>
  )
}

export default BooksMain