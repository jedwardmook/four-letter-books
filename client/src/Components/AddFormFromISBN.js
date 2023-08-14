import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/addform.min.css'

function AddFormFromISBN({book, author, descriptionArray, bookLanguage, work}) {
  const {
    title = "", 
    subtitle = "", 
    publishers = "", 
    publish_date = "", 
    physical_format = '', 
    isbn_10 = 'isbn', 
    isbn_13 = 'isbn', 
    number_of_pages = '', 
    physical_dimensions = ''
    } = book
  const {name} = author
  const {subjects} = work
  
  const isbn10Int = parseInt(isbn_10)
  const isbn13Int = parseInt(isbn_13)
  const splitBookLanguage = bookLanguage && (bookLanguage[0].slice(-3))

  const navigate = useNavigate()
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
  const [condition, setCondition] = useState('')
  const [price, setPrice] = useState()
  const [genre1, setGenre1] = useState(subjects[0])
  const [genre2, setGenre2] = useState(subjects[1])
  const [genre3, setGenre3] = useState(subjects[2])
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
      <header className='add_form_header'>
        <h2>Add Book</h2>
      </header>
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
            value={isbn10Int}
            onChange={(e) => setIsbn10(e.target.value)}
            className='add_form_input'
          />
          <input
            placeholder='Isbn 13'
            type='number'
            value={isbn13Int}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='add_form_input'
          />
          <button className='add_form_submit_button'>Add Book</button>
      </form>
    </main>
  )
}

export default AddFormFromISBN