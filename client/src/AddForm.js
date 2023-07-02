import React, { useState } from 'react'

function AddForm() {
  const [bookTitle, setBookTitle] = useState()
  const [bookSubtitle, setBookSubtitle] = useState()
  const [authorName, setAuthorName] = useState()
  const [bookDescription, setBookDescription] = useState()
  const [publisher, setPublisher] = useState()
  const [publishDate, setPublishDate] = useState()
  const [physicalFormat, setPhysicalFormat] = useState()
  const [isbn10, setIsbn10] = useState()
  const [isbn13, setIsbn13] = useState()
  const [pageNumber, setPageNumber] = useState()
  const [measurements, setMeasurements] = useState()
  const [language, setLanguage] = useState()
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
            value={isbn10}
            onChange={(e) => setIsbn10(e.target.value)}
          />
          <input
            placeholder='Isbn 13'
            value={isbn13}
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