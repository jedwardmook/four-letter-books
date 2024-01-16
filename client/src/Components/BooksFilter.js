import React from 'react'

function BooksFilter({searchInputOnChange}) {
  return (
    <div>
        <label htmlFor="search_books_input">Search Database</label>
        <input 
          id='search_books_input'
          placeholder='Search'
          className='books_main_search_input'
          onChange={searchInputOnChange}
        />
    </div>
  )
}

export default BooksFilter