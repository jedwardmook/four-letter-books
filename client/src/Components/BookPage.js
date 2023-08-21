import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function BookPage() {
  const [book, setBook] = useState()
  const [editBook, setEditBook] = useState(true)
  const [editTitle, setEditTitle] = useState()
  const [editSubtitle, setEditSubtitle] = useState()
  const [editAuthor, setEditAuthor] = useState()
  const [editDescription, setEditDescription] = useState()
  const [editPublisher, setEditPublisher] = useState()
  const [editYearPublished, setEditYearPublished] = useState()
  const [editCoverType, setEditCoverType] = useState()
  const [editIsbn10, setEditIsbn10] = useState()
  const [editIsbn13, setEditIsbn13] = useState()
  const [editPageNumber, setEditPageNumber] = useState()
  const [editMeasurements, setEditMeasurements] = useState()
  const [editLanguage, setEditLanguage] = useState()
  const [editCondition, setEditCondition] = useState()
  const [editPrice, setEditPrice] = useState()
  const [editGenre1, setEditGenre1] = useState()
  const [editGenre2, setEditGenre2] = useState()
  const [editGenre3, setEditGenre3] = useState()
  const [editQuantity, setEditQuantity] = useState()

  let bookId = useParams()
  let bookIdToFetch = parseInt(bookId.bookId)

  useEffect (() => {
    fetch(`/books/${bookIdToFetch}`).then((response) => {
        if (response.ok) {
          response.json().then((book) => setBook(book));
        } else {

        }
    })
  }, [bookIdToFetch])

  const handleEditTitle = (e) => {
    setEditTitle(e.target.value)
  }

  const handleEditSubtitle = (e) => {
    setEditSubtitle(e.target.value)
  }

  const handleEditAuthor = (e) => {
    setEditAuthor(e.target.value)
  }

  const handleEditDescription = (e) => {
    setEditDescription(e.target.value)
  }

  const handleEditPublisher = (e) => {
    setEditPublisher(e.target.value)
  }

  const handleEditYearPublished = (e) => {
    setEditYearPublished(e.target.value)
  }

  const handleEditCoverType = (e) => {
    setEditCoverType(e.target.value)
  }

  const handleEditIsbn10 = (e) => {
    setEditIsbn10(e.target.value)
  }

  const handleEditIsbn13 = (e) => {
    setEditIsbn13(e.target.value)
  }

  const handleEditPageNumber = (e) => {
    setEditPageNumber(e.target.value)
  }

  const handleEditMeasurements = (e) => {
    setEditMeasurements(e.target.value)
  }

  const handleEditLanguage = (e) => {
    setEditLanguage(e.target.value)
  }

  const handleEditCondition = (e) => {
    setEditCondition(e.target.value)
  }

  const handleEditPrice = (e) => {
    setEditPrice(e.target.value)
  }

  const handleEditGenre1 = (e) => {
    setEditGenre1(e.target.value)
  }

  const handleEditGenre2 = (e) => {
    setEditGenre2(e.target.value)
  }

  const handleEditGenre3 = (e) => {
    setEditGenre3(e.target.value)
  }

  const handleEditQuantity = (e) => {
    setEditQuantity(e.target.value)
  }

  return (
    book? <>
    <button onClick={() => setEditBook(!editBook)}>Edit Book</button>
    <table>
      <tr>
        <td>Title:</td>
        {editBook? <td>{book.title}</td>: <input 
                      type="text"
                      value={book.title}
                      onChange={handleEditTitle}
                      >
                    </input>}
      </tr>
      <tr>
        <td>Subtitle:</td>
        {editBook? <td>{book.subtitle}</td>: <input 
                      type="text"
                      value={book.subtitle}
                      onChange={handleEditSubtitle}>
                    </input>}
      </tr>
      <tr>
        <td>Author:</td>
        {editBook? <td>{book.author}</td>: <input 
                      type="text"
                      value={book.author}
                      onChange={handleEditAuthor}>
                    </input>}
      </tr>
      <tr>
        <td>Description:</td>
        {editBook? <td>{book.description}</td>: <textarea 
                      type="text"
                      value={book.description}
                      onChange={handleEditDescription}>
                    </textarea>}
      </tr>
      <tr>
        <td>Publisher:</td>
        {editBook? <td>{book.publisher}</td>: <input 
                      type="text"
                      value={book.publisher}
                      onChange={handleEditPublisher}>
                    </input>}
      </tr>
      <tr>
        <td>Year Published:</td>
        {editBook? <td>{book.year_published}</td>: <input
                      type="number"
                      value={book.year_published}
                      onChange={handleEditYearPublished}>
                    </input>}
      </tr>
      <tr>
        <td>Cover Type:</td>
        {editBook? <td>{book.cover_type}</td>: <input 
                      type="text"
                      value={book.cover_type}
                      onChange={handleEditCoverType}>
                    </input>}
      </tr>
      <tr>
        <td>ISBN 10:</td>
        {editBook? <td>{book.isbn_10}</td>: <input
                      type="number"
                      value={book.isbn_10}
                      onChange={handleEditIsbn10}>
                    </input>}
      </tr>
      <tr>
        <td>ISBN 13:</td>
        {editBook? <td>{book.isbn_13}</td>: <input
                      type="number"
                      value={book.isbn_13}
                      onChange={handleEditIsbn13}>
                    </input>}
      </tr>
      <tr>
        <td>Pages:</td>
        {editBook? <td>{book.page_number} pages</td>: <input
                      type="number"
                      value={book.page_number}
                      onChange={handleEditPageNumber}>
                    </input>}
      </tr>
      <tr>
        <td>Measurements:</td>
        {editBook? <td>{book.measurements}</td>: <input
                      type="text"
                      value={book.measurements}
                      onChange={handleEditMeasurements}>
                    </input>}
      </tr>
      <tr>
        <td>Language:</td>
        {editBook? <td>{book.language}</td>: <input
                      type="text"
                      value={book.language}
                      onChange={handleEditLanguage}>
                    </input>}
      </tr>
      <tr>
        <td>Condition:</td>
        {editBook? <td>{book.condition}</td>: <input
                      type="text"
                      value={book.condition}
                      onChange={handleEditCondition}>
                    </input>}
      </tr>
      <tr>
        <td>Price:</td>
        {editBook? <td>${book.price}</td>: <input
                      type="number"
                      value={book.price}
                      onChange={handleEditPrice}>
                    </input>}
      </tr>
      <tr>
        <td>Genre:</td>
        {editBook? <td>{book.genre1}</td>: <input
                      type="text"
                      value={book.genre1}
                      onChange={handleEditGenre1}>
                    </input>}
      </tr>
      <tr>
        <td>Genre:</td>
        {editBook? <td>{book.genre2}</td>: <input
                      type="text"
                      value={book.genre2}
                      onChange={handleEditGenre2}>
                    </input>}
      </tr>
      <tr>
        <td>Genre:</td>
        {editBook? <td>{book.genre3}</td>: <input
                      type="text"
                      value={book.genre3}
                      onChange={handleEditGenre3}>
                    </input>}
      </tr>
      <tr>
        <td>In Stock:</td>
        {editBook? <td>{book.quantity}</td>: <input
                      type="text"
                      value={book.quantity}
                      onChange={handleEditQuantity}>
                    </input>}
      </tr>
    </table>
    </> : <h1>Loading...</h1>
  )
}

export default BookPage