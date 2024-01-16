import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../Styles/editbookpage.min.css'

function EditBookPage({book, setBook, setEditBook, editBook}) {
  const {title, subtitle, author, description, publisher, year_published, cover_type, isbn_10,
    isbn_13, page_number, measurements, language, condition, price, genre1, genre2, genre3, quantity, id } = book
  const [editTitle, setEditTitle] = useState(title)
  const [editSubtitle, setEditSubtitle] = useState(subtitle)
  const [editAuthor, setEditAuthor] = useState(author)
  const [editDescription, setEditDescription] = useState(description)
  const [editPublisher, setEditPublisher] = useState(publisher)
  const [editYearPublished, setEditYearPublished] = useState(year_published)
  const [editCoverType, setEditCoverType] = useState(cover_type)
  const [editIsbn10, setEditIsbn10] = useState(isbn_10)
  const [editIsbn13, setEditIsbn13] = useState(isbn_13)
  const [editPageNumber, setEditPageNumber] = useState(page_number)
  const [editMeasurements, setEditMeasurements] = useState(measurements)
  const [editLanguage, setEditLanguage] = useState(language)
  const [editCondition, setEditCondition] = useState(condition)
  const [editPrice, setEditPrice] = useState(price)
  const [editGenre1, setEditGenre1] = useState(genre1)
  const [editGenre2, setEditGenre2] = useState(genre2)
  const [editGenre3, setEditGenre3] = useState(genre3)
  const [editQuantity, setEditQuantity] = useState(quantity)
  const [newPhotos, setNewPhotos] = useState([])
  const [removeConfirmation, setRemoveConfirmation] = useState(false)
  const navigate = useNavigate()

  const handleBookUpdate = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('book[title]', editTitle)
    formData.append('book[subtitle]', editSubtitle)
    formData.append('book[author]', editAuthor)
    formData.append('book[description]', editDescription)
    formData.append('book[publisher]', editPublisher)
    formData.append('book[year_published]', editYearPublished)
    formData.append('book[cover_type]', editCoverType)
    formData.append('book[isbn_10]', editIsbn10)
    formData.append('book[isbn_13]', editIsbn13)
    formData.append('book[page_number]', editPageNumber)
    formData.append('book[measurements]', editMeasurements)
    formData.append('book[language]', editLanguage)
    formData.append('book[condition]', editCondition)
    formData.append('book[price]', editPrice)
    formData.append('book[genre1]', editGenre1)
    formData.append('book[genre2]', editGenre2)
    formData.append('book[genre3]', editGenre3)
    formData.append('book[quantity]', editQuantity)
    if (newPhotos.length > 0){
      newPhotos.forEach((photo, index) =>
        formData.append(`images[]`, photo)
      );
    }
    
    fetch(`/books/${id}`, {
      method: "PATCH",
      body: formData,
    })
    .then((response) => {
      if (response.ok) {
          response.json().then((book) => {
              setBook(book)
              setEditBook(!editBook)
          });
      } else {
          response.json().then((error) => console.log(error));
      }
    });
  }


const editBookImagesToDisplay = book.image_urls !== null && book.image_urls.map ((image_url) => {
  return<Link to={`/books/${book.id}/image/${image_url.id}`} state= {{book: book, image_url:image_url}}>
          <img className="image" src={image_url.url} alt={image_url.url} />
        </Link>
})

const removeBookConfirmation = () => {
    fetch(`/books/${id}`, {
        method: "DELETE",
        }).then((response) => {
            if (response.ok) {
                navigate('/')
        }
    })
}

const booksAttachedAmount = book.image_urls !== null? book.image_urls.length : 0
const photoLimit = 4

const handleNewPhotosArray = files => {
  const photosToUpload = [...newPhotos]
  files.some(file => {
    return photosToUpload.push(file)
  })
  setNewPhotos(photosToUpload)
}

const handleNewPhotos = (e) => {
  const uploadedPhotos = Array.prototype.slice.call(e.target.files)
  handleNewPhotosArray(uploadedPhotos)
}


  
  return (
    <aside >
      <div>
        {editBookImagesToDisplay.length > 0 &&<h5>Click to edit</h5>}
        {editBookImagesToDisplay}
      </div>
      <form className="edit_book_page_form">
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="title">Title:</label>
          <input 
            type="text"
            id="title"
            className="edit_book_input"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="subtitle">Subtitle:</label>
          <input 
            type="text"
            id="subtite"
            className="edit_book_input"
            value={editSubtitle}
            onChange={(e) => setEditSubtitle(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="author">Author:</label>
          <input 
            type="text"
            id="author"
            className="edit_book_input"
            value={editAuthor}
            onChange={(e) => setEditAuthor(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="description">Description:</label>
          <textarea 
            type="text"
            id="description"
            className="edit_book_input"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="publisher">Publisher:</label>
          <input 
            type="text"
            id="publisher"
            className="edit_book_input"
            value={editPublisher}
            onChange={(e) => setEditPublisher(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="year_published">Year Published:</label>
          <input
            type="number"
            id="year_published"
            className="edit_book_input"
            value={editYearPublished}
            onChange={(e) => setEditYearPublished(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="cover_type">Cover Type:</label>
          <input 
            type="text"
            id="cover_type"
            className="edit_book_input"
            value={editCoverType}
            onChange={(e) => setEditCoverType(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="isbn_10">ISBN 10:</label>
          <input
            type="number"
            id="isbn_10"
            className="edit_book_input"
            value={editIsbn10}
            onChange={(e) => setEditIsbn10(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="isbn_13">ISBN 13:</label>
          <input
            type="number"
            id="isbn_13"
            className="edit_book_input"
            value={editIsbn13}
            onChange={(e) => setEditIsbn13(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="pages">pages:</label>
          <input
            type="number"
            id="pages"
            className="edit_book_input"
            value={editPageNumber}
            onChange={(e) => setEditPageNumber(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="measurements">Measurements:</label>
          <input
            type="text"
            id="measurements"
            className="edit_book_input"
            value={editMeasurements}
            onChange={(e) => setEditMeasurements(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="language">Language:</label>
          <input
            type="text"
            id="language"
            className="edit_book_input"
            value={editLanguage}
            onChange={(e) => setEditLanguage(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="condition">Condition:</label>
          <input
            type="text"
            id="condition"
            className="edit_book_input"
            value={editCondition}
            onChange={(e) => setEditCondition(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="price">Price:</label>
          <input
            type="number"
            id="price"
            className="edit_book_input"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="genre1">Genre:</label>
          <input
            type="text"
            id="genre1"
            className="edit_book_input"
            value={editGenre1}
            onChange={(e) => setEditGenre1(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="genre2">Genre:</label>
          <input
            type="text"
            id="genre2"
            className="edit_book_input"
            value={editGenre2}
            onChange={(e) => setEditGenre2(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="genre3">Genre:</label>
          <input
            type="text"
            id="genre3"
            className="edit_book_input"
            value={editGenre3}
            onChange={(e) => setEditGenre3(e.target.value)}
          />
        </div>
        <div className="edit_book_label_couples_div">
          <label className="edit_book_label" for="quantity">In Stock:</label>
          <input
            type="number"
            id="quantity"
            className="edit_book_input"
            value={editQuantity}
            onChange={(e) => setEditQuantity(e.target.value)}
          />
        </div>
        <div className="edit_book_image_div">
        {newPhotos && newPhotos.map ((photo, index) => {
                return <div className="edit_book_image_div" key={index}>
                          <img className="edit_form_image" src={URL.createObjectURL(photo)} alt='upload' />
                          <button type="button" 
                                  className="add_form_cancel" 
                                  onClick={() => setNewPhotos((photos) => {
                                            return photos.filter((photo, i) => i !== index);
                                              })}>X
                          </button>
                        </div>
                        })}
        </div>
        {booksAttachedAmount + newPhotos.length < photoLimit &&
        <input
                id='photos'
                type='file'
                accept=".jpg, .jpeg, .png, .webp"
                onChange={handleNewPhotos}
                className={newPhotos.length === photoLimit? "none":'edit_book_input_file'}
                disabled={newPhotos.length + booksAttachedAmount === photoLimit}
              />}         
      </form>
      <div className="edit_book_buttons_div">
          <button className="edit_book_submit" onClick={handleBookUpdate}>Submit</button>
          <button className="edit_book_remove" onClick={() => setRemoveConfirmation(!removeConfirmation)}>Remove</button>
        </div> 
      {removeConfirmation&&
      <dialog className="edit_book_remove_modal" open>
        <h4>Remove book from database?</h4>
        <div className="edit_book_modal_div">
          <button className="edit_book_modal_button" onClick={removeBookConfirmation}>Yes</button>
          <button className="edit_book_modal_button" onClick={() => setRemoveConfirmation(!removeConfirmation)}>No</button>
        </div>
      </dialog>}
    </aside>
  )
}

export default EditBookPage