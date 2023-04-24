import React, { useState } from 'react'

function SearchBook({placeholder, value, onChange, fetchAddress}) {
  const [book, setBook] = useState('')
  const [author, setAuthor] = useState()
  const [isbnFormDiv, setIsbnFormDiv] = useState(false)
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [publisher, setPublisher] = useState('')
  const [publishDate, setPublishDate] = useState('')
  const [physicalFormat, setPhysicalFormat] = useState('')
  const [price, setPrice] = useState('')


  function submitSearch(e){
    e.preventDefault()
    fetch(`${fetchAddress}${value}.json`)
      .then(response => response.json())
      .then((data) => {
        setBook(data)
        console.log(data)
        splitAuthor(data)
        setIsbnFormDiv(true)});
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
    setIsbnFormDiv(!isbnFormDiv)
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
      {isbnFormDiv&&
      <div>
        <form>
          <input
            placeholder='Title'
            value={book? book.title: title}
          />
          <input
            placeholder='Subtitle'
            value={book? book.subtitle: subtitle}
          />
          <input
            placeholder='Author'
            value={author? author.name: authorName}
          />
          <input
            placeholder='Publisher'
            value={book? book.publishers: publisher}
          />
          <input
            placeholder='Published Date'
            value={book? book.publish_date: publishDate}
          />
          <input
            placeholder='Format'
            value={book? book.physical_format: physicalFormat}
          />
          <input
            placeholder='Price'
            value={book? book.price: price}
          />
        </form>
      </div>}
    </div>
  )
}

export default SearchBook