import React, { useState } from 'react'

function SearchBook({placeholder, value, onChange, fetchAddress}) {
  const [book, setBook] = useState('')
  const [author, setAuthor] = useState()
  const [work, setWork] = useState()
  const [isbnFormDiv, setIsbnFormDiv] = useState(false)
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [description, setDescription] = useState('')
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
        splitWork(data)
        setIsbnFormDiv(true)});
    };

  function splitAuthor(book){
    if (book.authors){
      const author = Object.values(book.authors[0])
      fetchAuthor(author)}
    else {
      console.log("No books.authors")
    }
  }
  
  function splitWork(book){
    if (book.works){
      const work = Object.values(book.works[0])
      fetchWork(work)}
    else {
      console.log("No books.works")
    }
  }
  
  function fetchAuthor(author){
    fetch(`http://openlibrary.org${author}.json`)
    .then(response => response.json())
      .then((data) => {
        setAuthor(data)
        console.log(data)
      })
  }

  function fetchWork(work){
    fetch(`http://openlibrary.org${work}.json`)
    .then(response => response.json())
      .then((data) => {
        setWork(data)
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
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder='Subtitle'
            value={book? book.subtitle: subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
          <input
            placeholder='Author'
            value={author? author.name: authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
          <input
            placeholder='Description'
            value={work? work.description: description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder='Publisher'
            value={book? book.publishers: publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
          <input
            placeholder='Published Date'
            value={book? book.publish_date: publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
          />
          <input
            placeholder='Format'
            value={book? book.physical_format: physicalFormat}
            onChange={(e) => setPhysicalFormat(e.target.value)}
          />
          <input
            placeholder='Price'
            value={book? book.price: price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </form>
      </div>}
    </div>
  )
}

export default SearchBook