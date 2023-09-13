import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../Styles/addform.min.css'

function AddForm() {
  const location = useLocation()
  
  const isbn10Int = location.state? parseInt(location.state.book.isbn_10) : ''
  const isbn13Int = location.state? parseInt(location.state.book.isbn_13) : ''
  const splitBookLanguage = location.state? (location.state.bookLanguage[0].slice(-3)) : ""

  const navigate = useNavigate()
  const [bookTitle, setBookTitle] = useState(location.state? location.state.book.title : '')
  const [bookSubtitle, setBookSubtitle] = useState(location.state? location.state.book.subtitle : '')
  const [authorName, setAuthorName] = useState(location.state? location.state.author.name : '')
  const [bookDescription, setBookDescription] = useState(location.state? location.state.descriptionArray : '')
  const [publisher, setPublisher] = useState(location.state? location.state.book.publishers : '')
  const [publishDate, setPublishDate] = useState(location.state? location.state.book.publish_date : '')
  const [physicalFormat, setPhysicalFormat] = useState(location.state? location.state.book.physical_format : '')
  const [isbn10, setIsbn10] = useState(isbn10Int)
  const [isbn13, setIsbn13] = useState(isbn13Int)
  const [pageNumber, setPageNumber] = useState(location.state? location.state.book.number_of_pages : '')
  const [measurements, setMeasurements] = useState(location.state? location.state.book.physical_dimensions : '')
  const [language, setLanguage] = useState(splitBookLanguage)
  const [condition, setCondition] = useState('')
  const [price, setPrice] = useState('')
  const [genre1, setGenre1] = useState(location.state? location.state.work.subjects[0] : '')
  const [genre2, setGenre2] = useState(location.state? location.state.work.subjects[1] : '')
  const [genre3, setGenre3] = useState(location.state? location.state.work.subjects[2] : '')
  const [quantity, setQuantity] = useState('')
  const [photos, setPhotos] = useState([])
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
    formData.append('book[quantity]', quantity)
    photos.forEach((photo, index) =>
      formData.append(`images[]`, photo)
    );

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


  const handlePhotosArray = files => {
    const photosToUpload = [...photos]
    files.some(file => {
      return photosToUpload.push(file)
    })
    setPhotos(photosToUpload)
  }

  const handlePhotos = (e) => {
    const uploadedPhotos = Array.prototype.slice.call(e.target.files)
    handlePhotosArray(uploadedPhotos)
  }

  const photoLimit = 4
  
  return (
    <main className='add_form_main'>
      <header className='add_form_header'>
        <h2>Add Book Details</h2>
      </header>
      <form className='add_form_form' onSubmit={handleSubmitBook}>
          <label for="title" className="add_form_input_label">Title</label>
          <input
            placeholder='title'
            id='title'
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            className='add_form_input'
          />
          <label for="subtitle" className="add_form_input_label">Subtitle</label>
          <input
            placeholder="subtitle"
            id="subtitle"
            value={bookSubtitle}
            onChange={(e) => setBookSubtitle(e.target.value)}
            className='add_form_input'
          />
          <label for="author" className="add_form_input_label">Author</label>
          <input
            placeholder="author's name"
            id="author"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className='add_form_input'
          />
          <label for="description" className="add_form_input_label">Description</label>
          <textarea
            placeholder='description of work'
            id='description'
            value={bookDescription}
            onChange={(e) => setBookDescription(e.target.value)}
            className='add_form_input_textarea'
          />
          <div className="horizontal_div">
            <div className="vertical_div">
              <label for="publisher" className="add_form_input_label_vertical">Publisher</label>
              <input
                placeholder='publisher name'
                id='publisher'
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                className='add_form_input_half'
              />
            </div>
            <div className="vertical_div">
              <label for="published_date" className="add_form_input_label_vertical">Date Published</label>
              <input
                placeholder='date published on'
                id='published_date'
                type='number'
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
                className='add_form_input_half'
              />
            </div>
          </div>
          <label for="genres" className="add_form_input_label">Genres</label>
            <input
              placeholder='1'
              value={genre1}
              onChange={(e) => setGenre1(e.target.value)}
              className='add_form_input_genre'
            />
            <input
              placeholder='2'
              value={genre2}
              onChange={(e) => setGenre2(e.target.value)}
              className='add_form_input_genre'
            />
            <input
              placeholder='3'
              value={genre3}
              onChange={(e) => setGenre3(e.target.value)}
              className='add_form_input'
            />
          <div className="horizontal_div">
            <div className="vertical_div">
            <label for="cover_type" className="add_form_input_label_vertical">Format</label>
              <input
                placeholder='cover type'
                id='cover_type'
                value={physicalFormat}
                onChange={(e) => setPhysicalFormat(e.target.value)}
                className='add_form_input_fourth'
              />
            </div>
            <div className="vertical_div">
              <label for="page_number" className="add_form_input_label_vertical">Pages</label>
              <input
                placeholder='amount'
                type='number'
                id='page_number'
                value={pageNumber}
                onChange={(e) => setPageNumber(e.target.value)}
                className='add_form_input_fourth'
              />
            </div>
            <div className="vertical_div">
              <label for="dimensions" className="add_form_input_label_vertical">Dimensions</label>
              <input
                placeholder='size'
                id='dimensions'
                value={measurements}
                onChange={(e) => setMeasurements(e.target.value)}
                className='add_form_input_fourth'
              />
            </div>
            <div className="vertical_div">
              <label for="language" className="add_form_input_label_vertical">Language</label>
              <input
                placeholder='language'
                id='language'
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className='add_form_input_fourth'
              />
              </div>
          </div>
          <div className="horizontal_div">
            <div className="vertical_div">
              <label for="isb_10" className="add_form_input_label_vertical">Isbn 10</label>
              <input
                placeholder='number'
                id='isbn_10'
                value={isbn10}
                onChange={(e) => setIsbn10(e.target.value)}
                className='add_form_input_half'
              />
            </div>
            <div className="vertical_div">
              <label for="isbn_13" className="add_form_input_label_vertical">Isbn 13</label>
              <input
                placeholder='number'
                type='number'
                id='isbn_13'
                value={isbn13}
                onChange={(e) => setIsbn13(e.target.value)}
                className='add_form_input_half'
              />
            </div>
          </div>
          <div className="horizontal_div">
            <div className="vertical_div">
              <label for="condition" className="add_form_input_label_vertical">Condition</label>
              <input
                placeholder='i.e. like new'
                id='condition'
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className='add_form_input_third'
              />
            </div>
            <div className="vertical_div">
              <label for="price" className="add_form_input_label_vertical">Price</label>
              <input
                placeholder='amount'
                id='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className='add_form_input_third'
              />
            </div>
            <div className="vertical_div">
              <label for="quantity" className="add_form_input_label_vertical">Quantity</label>
              <input
                placeholder='amount'
                id='quantity'
                type='number'
                min='1'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className='add_form_input_third'
              />
            </div>
          </div>
          <label for="photos" className="add_form_input_label_vertical">{photos.length === photoLimit? "Limit Reached" : "Add Photos(limit 4)"}</label>
          <div className='horizontal_photos_div'>
              {photos && photos.map ((photo, index) => {
                return <div className="add_form_image_div" key={index}>
                          <img className="add_form_image" src={URL.createObjectURL(photo)} alt='upload' />
                          <button type="button" 
                                  className="add_form_cancel" 
                                  onClick={() => setPhotos((photos) => {
                                            return photos.filter((photo, i) => i !== index);
                                              })}>X
                          </button>
                        </div>
                        })}
          </div>
              <input
                id='photos'
                type='file'
                accept=".jpg, .jpeg, .png, .webp"
                onChange={handlePhotos}
                className={photos.length === photoLimit? "none":'add_form_input_file'}
                disabled={photos.length === photoLimit}
              />
          <div className='form_button_div'>
            <button className='add_form_submit_button'>Submit</button>
          </div>
      </form>
    </main>
  )
}

export default AddForm