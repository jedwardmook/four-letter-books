import React, { useEffect, useState } from 'react'
import '../Styles/booksmain.min.css'


function BooksMain() {
    const [books, setBooks] = useState()

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



    const booksToDisplay = books && books.map((book,index) => {
      return <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn_10}</td>
              <td>{book.isbn_13}</td>
              <td>{book.page_number}</td>
              <td>{book.condition}</td>
              <td>{book.price}</td>
            </tr>
    })

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
    </main>
  )
}

export default BooksMain