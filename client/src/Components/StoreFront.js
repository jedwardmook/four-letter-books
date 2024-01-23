import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BooksContext } from '../context/books'
import StoreNavBar from './StoreNavBar'

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
      <StoreNavBar />
      {booksToDisplay}
    </div>
  )
}

export default StoreFront
