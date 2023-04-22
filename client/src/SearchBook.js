import React, { useState } from 'react'

function SearchBook({placeholder, value, onChange, fetchAddress}) {
  const [book, setBook] = useState()
  const [author, setAuthor] = useState()

  function submitSearch(e){
    e.preventDefault()
    fetch(`${fetchAddress}${value}.json`)
      .then(response => response.json())
      .then((data) => {
        setBook(data)
        console.log(data)
        splitAuthor(data)});
    };

  function splitAuthor(book){
    const author = Object.values(book.authors[0])
    console.log(author)
    fetchAuthor(author)
  }

  function fetchAuthor(author){
    fetch(`http://openlibrary.org${author}.json`)
    .then(response => response.json())
      .then((data) => {
        setAuthor(data)
        console.log(data)
      })
  }

  return (
    <form onSubmit={submitSearch}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button>Search</button>
      {book&& <h1>{book.title}</h1>}
      {author&& <h3>{author.name}</h3>}
    </form>
  )
}

export default SearchBook