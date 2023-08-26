import '../Styles/addbook.min.css'
import { Link } from 'react-router-dom'



function AddBook() {

  //component for adding books
  return (
    <main className='add_book_main'>
      <article className='add_book_article'>
        <Link className='add_book_link' to="/add_book_form">
          <button className='add_book_button'>Add Book Manually</button>
        </Link>
        <Link className='add_book_link' to='/add_book_isbn'>
         <button className='add_book_button'>Add Book with ISBN</button>
        </Link> 
      </article> 
    </main>
  )
}

export default AddBook