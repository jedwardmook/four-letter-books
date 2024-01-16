import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/booksmain.min.css'

function BooksContainer({books, startIndex, endIndex}) {

    const booksToDisplay = books?.slice(startIndex, endIndex).map((book,index) => {
        return <tr className="books_main_data" key={index}>
                <td>{book.image_urls? <img className='books_main_image' src={book.image_urls[0].url} alt='cover'/>: ""}</td>
                <td className="books_main_title">{book.title}: {book.subtitle}</td>
                <td>{book.author}</td>              
                <td>{book.isbn_10 === 0? "N/A": book.isbn_10}</td>
                <td>{book.isbn_13 === 0 ? "N/A" : book.isbn_13}</td>
                <td>{book.page_number}</td>
                <td>{book.condition}</td>
                <td>{book.price}</td>
                <td>{book.quantity}</td>
                <td><Link className="books_main_link" to={`/books/${book.id}`}>details...</Link></td>
             </tr>
      })

  return (
    <table className="books_main_table">
      <thead className="books_main_table_head">
        <tr>
          <th></th>
          <th>Title</th>
          <th>Author</th>
          <th>Isbn 10</th>
          <th>Isbn 13</th>
          <th>Pages</th>
          <th>Condition</th>
          <th>Price</th>
          <th>Stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {booksToDisplay}
      </tbody>
    </table>
  )
}

export default BooksContainer