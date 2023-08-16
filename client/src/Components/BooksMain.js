import React, { useEffect, useState } from 'react'
import '../Styles/booksmain.min.css'


function BooksMain() {
  const [books, setBooks] = useState()
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(20)

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



  const booksToDisplay = books && books.slice(startIndex, endIndex).map((book,index) => {
    return <tr className="books_main_data" key={index}>
            <td>{book.title}</td>
            <td>{book.author}</td>              
            <td>{book.isbn_10}</td>
            <td>{book.isbn_13}</td>
            <td>{book.page_number}</td>
            <td>{book.condition}</td>
            <td>{book.price}</td>
          </tr> 
    })

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
        <table className="books_main_table">
          <thead className="books_main_table_head">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Isbn 10</th>
              <th>Isbn 13</th>
              <th>Page Number</th>
              <th>Condition</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {booksToDisplay}
          </tbody>
        </table>
        {booksToDisplay&&
        <div className="books_main_controls_div">
          {startIndex > 0 &&<button onClick={lastPage} className="books_main_controls_button">&lt;</button>}
            <p className="books_main_controls_display">Showing: {startIndex} - {startIndex + booksToDisplay.length}</p>
          {booksToDisplay.length > endIndex - 1 &&<button onClick={nextPage} className="books_main_controls_button">&gt;</button>}
        </div>}
    </main>
  )
}

export default BooksMain