import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BooksContext } from '../context/books'

function StoreFront() {
  const { books } = useContext(BooksContext)

  const booksToDisplay = books?.map((book) => {
    return (
      <Link to={`/store/${book.id}`}>
          <div key={book.id}>{book.title}</div>
      </Link>
    )
  })
  return (
    <div>
      StoreFront
      {booksToDisplay}
    </div>
  )
}

export default StoreFront
