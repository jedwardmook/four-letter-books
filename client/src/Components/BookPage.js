import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function BookPage() {
  const [book, setBook] = useState()

  let bookId = useParams()
  let bookIdToFetch = parseInt(bookId.bookId)
  console.log(book)

  useEffect (() => {
    fetch(`/books/${bookIdToFetch}`).then((response) => {
        if (response.ok) {
          response.json().then((book) => setBook(book));
        } else {

        }
    })
  }, [bookIdToFetch])


  return (
    book?
    <div>BookPage</div> : <h1>Loading...</h1>
  )
}

export default BookPage