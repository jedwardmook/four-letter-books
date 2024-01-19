import React, { useContext } from 'react'
import { BooksContext } from '../context/books'

function StoreFront() {
  const { books } = useContext(BooksContext)

  const booksToDisplay = books?.map((book) => {
    return (
      <div key={book.id}>{book.title}</div>
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
