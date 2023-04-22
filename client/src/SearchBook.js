import React, { useState } from 'react'

function SearchBook({placeholder, value, onChange, fetchAddress}) {
  const [book, setBook] = useState()
  const [author, setAuthor] = useState()
  const [formDiv, setFormDiv] = useState(false)

  function submitSearch(e){
    e.preventDefault()
    fetch(`${fetchAddress}${value}.json`)
      .then(response => response.json())
      .then((data) => {
        setBook(data)
        console.log(data)
        splitAuthor(data)
        setFormDiv(true)});
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

  function showAddForm(){
    setFormDiv(!formDiv)
  }

  return (
    <div>
      <form onSubmit={submitSearch}>
        <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
        <button>Search</button>
      </form>
      <button onClick={showAddForm}>Add Book Manually</button>
      {formDiv&&
      <div>
        <form>
          <input
            placeholder='Title'
            value={book&& book.title}
          />
          <input
            placeholder='Subtitle'
            value={book&& book.subtitle}
          />
          <input
            placeholder='Author'
            value={author&& author.name}
          />
          <input
            placeholder='Publisher'
            value={book&& book.publishers}
          />
          <input
            placeholder='Published Date'
            value={book&& book.publish_date}
          />
          <input
            placeholder='Format'
            value={book&& book.physical_format}
          />
        </form>
      </div>}
    </div>
  )
}

export default SearchBook