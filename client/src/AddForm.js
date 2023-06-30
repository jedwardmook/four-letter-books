import React, { useState } from 'react'

function AddForm({book, author, descriptionArray, bookLanguage}) {
    const {
      title = "", 
      subtitle = "", 
      publishers = "", 
      publish_date = "", 
      physical_format = '', 
      isbn_10 = '', 
      isbn_13 = '', 
      number_of_pages = '', 
      physical_dimensions = ''
      } = book
    const {name} = author
    console.log(author)

    const isbn10Int = parseInt(isbn_10)
    const isbn13Int = parseInt(isbn_13)
    const splitBookLanguage = bookLanguage && (bookLanguage[0].slice(-3))

    const [bookTitle, setBookTitle] = useState(title)
    const [bookSubtitle, setBookSubtitle] = useState(subtitle)
    const [authorName, setAuthorName] = useState(name)
    const [bookDescription, setBookDescription] = useState(descriptionArray)
    const [publisher, setPublisher] = useState(publishers)
    const [publishDate, setPublishDate] = useState(publish_date)
    const [physicalFormat, setPhysicalFormat] = useState(physical_format)
    const [isbn10, setIsbn10] = useState()
    const [isbn13, setIsbn13] = useState()
    const [pageNumber, setPageNumber] = useState(number_of_pages)
    const [measurements, setMeasurements] = useState(physical_dimensions)
    const [language, setLanguage] = useState(splitBookLanguage)
    const [price, setPrice] = useState()
  
    return (
    <form>
          <input
            placeholder='Title'
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
          <input
            placeholder='Subtitle'
            value={bookSubtitle}
            onChange={(e) => setBookSubtitle(e.target.value)}
          />
          <input
            placeholder='Author'
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
          <input
            placeholder='Description'
            value={bookDescription}
            onChange={(e) => setBookDescription(e.target.value)}
          />
          <input
            placeholder='Publisher'
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
          <input
            placeholder='Published Date'
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
          />
          <input
            placeholder='Isbn 10'
            value={isbn10Int}
            onChange={(e) => setIsbn10(e.target.value)}
          />
          <input
            placeholder='Isbn 13'
            value={isbn13Int}
            onChange={(e) => setIsbn13(e.target.value)}
          />
          <input
            placeholder='Pages'
            value={pageNumber}
            onChange={(e) => setPageNumber(e.target.value)}
          />
          <input
            placeholder='Format'
            value={physicalFormat}
            onChange={(e) => setPhysicalFormat(e.target.value)}
          />
          <input
            placeholder='Measurements'
            value={measurements}
            onChange={(e) => setMeasurements(e.target.value)}
          />
          <input
            placeholder='Language'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <input
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </form>
  )
}

export default AddForm