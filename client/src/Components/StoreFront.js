import React, { useContext } from 'react'
import { BooksContext } from '../context/books'

function StoreFront() {
  const { books } = useContext(BooksContext)

  console.log(books)
  return (
    <div>StoreFront</div>
  )
}

export default StoreFront
