import React, { useState } from 'react'
import SearchBook from './SearchBook'

function AddBook() {
  const[isbn, setIsbn] = useState('')
  const[title, setTitle] = useState('')
    //component for adding books
  return (
    <div>
        <SearchBook 
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          fetchAddress="http://openlibrary.org/api/volumes/brief/isbn/"
          />
        <SearchBook 
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
    </div>
  )
}

export default AddBook