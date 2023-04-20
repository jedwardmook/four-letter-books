import React, { useState } from 'react'

function SearchBook({placeholder, value, onChange, fetchAddress}) {
  const [book, setBook] = useState()

  function submitSearch(e){
    e.preventDefault()
    fetch(`${fetchAddress}${value}.json`)
      .then(response => response.json())
      .then((data) => setBook(data));
    };

  return (
    <form onSubmit={submitSearch}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button>Search</button>
      {book&& <h1>{book.title}</h1>}
    </form>
  )
}

export default SearchBook