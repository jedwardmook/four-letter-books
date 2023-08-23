import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

const removeBookConfirmation = () => {
    fetch(`/books/${id}`, {
        method: "DELETE",
        }).then((response) => {
            if (response.ok) {
                navigate('/')
        }
    })
}
  
  return (
    <aside >
      <form className="edit_book_page_form" onSubmit={handleBookUpdate}>
        <input 
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          />
        <input 
          type="text"
          value={editSubtitle}
          onChange={(e) => setEditSubtitle(e.target.value)}
          />
        <input 
          type="text"
          value={editAuthor}
          onChange={(e) => setEditAuthor(e.target.value)}
          />
        <textarea 
          type="text"
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          />
        <input 
          type="text"
          value={editPublisher}
          onChange={(e) => setEditPublisher(e.target.value)}
          /> 
        <input
          type="number"
          value={editYearPublished}
          onChange={(e) => setEditYearPublished(e.target.value)}
          />
        <input 
          type="text"
          value={editCoverType}
          onChange={(e) => setEditCoverType(e.target.value)}
          />
        <input
          type="number"
          value={editIsbn10}
          onChange={(e) => setEditIsbn10(e.target.value)}
          />
        <input
          type="number"
          value={editIsbn13}
          onChange={(e) => setEditIsbn13(e.target.value)}
          />
        <input
          type="number"
          value={editPageNumber}
          onChange={(e) => setEditPageNumber(e.target.value)}
          />
        <input
          type="text"
          value={editMeasurements}
          onChange={(e) => setEditMeasurements(e.target.value)}
          />
        <input
          type="text"
          value={editLanguage}
          onChange={(e) => setEditLanguage(e.target.value)}
          />
        <input
          type="text"
          value={editCondition}
          onChange={(e) => setEditCondition(e.target.value)}
          />
        <input
          type="number"
          value={editPrice}
          onChange={(e) => setEditPrice(e.target.value)}
          />
        <input
          type="text"
          value={editGenre1}
          onChange={(e) => setEditGenre1(e.target.value)}
          />
        <input
          type="text"
          value={editGenre2}
          onChange={(e) => setEditGenre2(e.target.value)}
          />
        <input
          type="text"
          value={editGenre3}
          onChange={(e) => setEditGenre3(e.target.value)}
          />
        <input
          type="number"
          value={editQuantity}
          onChange={(e) => setEditQuantity(e.target.value)}
          /> 
        <button>Submit Changes</button>
                     
      </form>
      <button onClick={() => setRemoveConfirmation(!removeConfirmation)}>Remove Book</button>
      {removeConfirmation&&
      <dialog open>
        <p>Are you sure</p>
        <button onClick={removeBookConfirmation}>yes</button>
        <button onClick={() => setRemoveConfirmation(!removeConfirmation)}>no</button>
      </dialog>}
    </aside>
  )
}

export default EditBookPage