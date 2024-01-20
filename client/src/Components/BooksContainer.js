import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/booksmain.min.css'

function BooksContainer({filterBooks}) {
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(20)

    const booksToDisplay = filterBooks?.slice(startIndex, endIndex).map((book,index) => {
        return <tr className="books_main_data" key={index}>
                <td>{book.image_urls.length > 0 ? <img className='books_main_image' src={book.image_urls[0].url} alt='cover'/>: ""}</td>
                <td className="books_main_title">{book.title}: {book.subtitle}</td>
                <td>{book.author}</td>              
                <td>{book.isbn_13 === 0 ? "N/A" : book.isbn_13}</td>
                <td>{book.price}</td>
                <td>{book.quantity}</td>
                <td><Link className="books_main_link" to={`/books/${book.id}`}>details...</Link></td>
             </tr>
      })

      function nextPage(){
        setStartIndex(startIndex + 20)
        setEndIndex(endIndex + 20)
      }  
    
      function lastPage(){
        setStartIndex(startIndex - 20)
        setEndIndex(endIndex - 20)
      }

  return (
    <div>
    <table className="books_main_table">
      <thead className="books_main_table_head">
        <tr>
          <th></th>
          <th>Title</th>
          <th>Author</th>
          <th>Isbn 13</th>
          <th>Price</th>
          <th>Stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {booksToDisplay}
      </tbody>
    </table>
    {booksToDisplay&&
      <div className="books_main_controls_div">
        {startIndex > 0 &&
            <button onClick={lastPage} className="books_main_controls_button">&lt;</button>
            }
            <p className="books_main_controls_display">Showing: {startIndex + 1} - {startIndex + booksToDisplay.length}</p>
        {booksToDisplay.length + 1 > endIndex &&
            <button onClick={nextPage} className="books_main_controls_button">&gt;</button>
            }
        </div>}
    </div>
  )
}

export default BooksContainer