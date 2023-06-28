import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBook from './SearchBook'
import Scanner2 from './Scanner2'


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
        <Link to="/isbn_scanner">
          <button>Use Scanner</button>
        </Link>
    </div>
  )
}

export default AddBook