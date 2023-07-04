import React from 'react'
import { Link } from 'react-router-dom'



function AddBook() {
    
  //component for adding books
  return (
    <div>
        <Link to="/add_book_form">
          <button>Add Book Manually</button>
        </Link>
        <Link to='/add_book_isbn'>
         <button>Add Book Using ISBN</button>
        </Link>  
    </div>
  )
}

export default AddBook