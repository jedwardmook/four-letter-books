import React, { useState } from 'react'

function SearchBook({placeholder, value, onChange, fetchAddress}) {
  const [book, setBook] = useState('')

  function submitSearch(e){
    e.preventDefault()
    fetch('http://openlibrary.org/api/volumes/brief/isbn/9780192832696.json')
      .then((response) => response.json())
      .then((data) => setBook(data));

      console.log(book)
    };

  return (
    <form onSubmit={submitSearch}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button>Search</button>
    </form>
  )
}

export default SearchBook