import React, { useState } from 'react'
import SearchBook from './SearchBook'
import Scanner from './Scanner'

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
        {/* <Scanner 
          setIsbn={setIsbn}
          /> */}
    </div>
  )
}

export default AddBook