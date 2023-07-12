import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/addform.min.css'

function AddForm() {
  const navigate = useNavigate()
  const [bookTitle, setBookTitle] = useState('')
  const [bookSubtitle, setBookSubtitle] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [bookDescription, setBookDescription] = useState('')
  const [publisher, setPublisher] = useState('')
  const [publishDate, setPublishDate] = useState(null)
  const [physicalFormat, setPhysicalFormat] = useState('')
  const [isbn10, setIsbn10] = useState(null)
  const [isbn13, setIsbn13] = useState(null)
  const [pageNumber, setPageNumber] = useState(null)
  const [measurements, setMeasurements] = useState('')
  const [language, setLanguage] = useState('')
  const [condition, setCondition] = useState('')
  const [price, setPrice] = useState(null)
  const [genre1, setGenre1] = useState('')
  const [genre2, setGenre2] = useState('')
  const [genre3, setGenre3] = useState('')
  const [errors, setErrors] = useState([])

  const handleSubmitBook = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('book[title]', bookTitle)
    formData.append('book[subtitle]', bookSubtitle)
    formData.append('book[author]', authorName)
    formData.append('book[description]', bookDescription)
    formData.append('book[publisher]', publisher)
    formData.append('book[year_published]', publishDate)
    formData.append('book[cover_type]', physicalFormat)
    formData.append('book[isbn_10]', isbn10)
    formData.append('book[isbn_13]', isbn13)
    formData.append('book[page_number]', pageNumber)
    formData.append('book[measurements]', measurements)
    formData.append('book[language]', language)
    formData.append('book[price]', price)
    formData.append('book[condition]', condition)
    formData.append('book[genre1]', genre1)
    formData.append('book[genre2]', genre2)
    formData.append('book[genre3]', genre3)

    fetch('/books', {
      method: "POST",
      body: formData
    }).then((response) => {
        if (response.ok) {
          response.json().then((book) => {
            console.log("Book added")
            navigate('/add_book');
          })
        } else {
          response.json().then((errors) => console.log(errors.errors))
        }
    })
  }

  return (
    <main className='add_form_main'>
      <div className='add_form_header'>
        <h2>Add Book</h2>
      </div>
      <form className='add_form_form' onSubmit={handleSubmitBook}>
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
            type='number'
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Isbn 10'
            type='number'
            value={isbn10}
            onChange={(e) => setIsbn10(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Isbn 13'
            type='number'
            value={isbn13}
            onChange={(e) => setIsbn13(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Pages'
            type='number'
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
            placeholder='Condition'
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Genre'
            value={genre1}
            onChange={(e) => setGenre1(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Genre'
            value={genre2}
            onChange={(e) => setGenre2(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Genre'
            value={genre3}
            onChange={(e) => setGenre3(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Price'
            type='number'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='add_form_input'
          />
          <button className='add_form_submit_button'>Add Book</button>
      </form>
    </main>
  )
}

export default AddForm