import React, { useState } from 'react'
import SearchBook from './SearchBook'

function AddBook() {
  const[isbn, setIsbn] = useState('')
    
  //component for adding books
  return (
    <div>
        <SearchBook 
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          fetchAddress="http://openlibrary.org/isbn/"
        />
    </div>
  )
}

export default AddBook