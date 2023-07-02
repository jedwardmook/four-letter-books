import React, { useState } from 'react'
import '../Styles/addform.min.css'

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
    <main className='add_form_main'>
      <div className='add_form_header'>
        <h2>Add Book</h2>
      </div>
      <form className='add_form_form'>
          <input
            placeholder='Title'
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Subtitle'
            value={bookSubtitle}
            onChange={(e) => setBookSubtitle(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Author'
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className='add_form_input'
          />
          <textarea
            placeholder='Description'
            value={bookDescription}
            onChange={(e) => setBookDescription(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Publisher'
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Published Date'
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Isbn 10'
            value={isbn10}
            onChange={(e) => setIsbn10(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Isbn 13'
            value={isbn13}
            onChange={(e) => setIsbn13(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Pages'
            value={pageNumber}
            onChange={(e) => setPageNumber(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Format'
            value={physicalFormat}
            onChange={(e) => setPhysicalFormat(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Measurements'
            value={measurements}
            onChange={(e) => setMeasurements(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Language'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='add_form_input'
          />
      </form>
    </main>
  )
}

export default AddForm