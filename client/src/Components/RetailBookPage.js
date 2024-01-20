import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RBPhotosViewer from './RBPhotosViewer'

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
    book?
    <main>
        <RBPhotosViewer 
            photos = {book.image_urls}/>
        <p>{book.title}</p>
        <p>${book.price}</p>
        <p>{book.author}</p>
        <p>{book.publisher}, {book.year_published}</p>
        <p>ISBN: {book.isbn_13}</p>
        <p>{book.description}</p>
        <p>{book.cover_type} {book.condition}</p>
        <button>Add To Cart</button>
    </main>
    :
    <p>Loading...</p>
  )
}

export default RetailBookPage