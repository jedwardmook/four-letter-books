import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RetailBookPage() {
    const [book, setBook] = useState()

    let bookId = useParams()
    const bookIdToFetch = parseInt(bookId.bookId)

    useEffect(() => {
        fetch(`/books/${bookIdToFetch}`).then((response) => {
            if (response.ok) {
              response.json().then((book) => setBook(book));
            } else {
    
            }
        })
    }, [])


  return (
    <div>RetailBookPage</div>
  )
}

export default RetailBookPage