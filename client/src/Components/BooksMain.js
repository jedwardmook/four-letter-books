import React, { useContext, useState } from 'react'
import '../Styles/booksmain.min.css'
import BooksContainer from './BooksContainer'
import BooksFilter from './BooksFilter'
import { BooksContext } from '../context/books'


function BooksMain() {
  const { books } = useContext(BooksContext)
  const [searchInputValue, setSearchInputValue] = useState()

  const filterBooks = books?.filter(book => {
    return Object.values(book).some(value =>
      String(value).toLowerCase().includes(searchInputValue?.toLowerCase()))
  })

  const searchInputOnChange = (e) => {
    setSearchInputValue(e.target.value)
  };

  return ( 
    <main className="books_main_main">
      <h2>Books Database</h2>
        <BooksContainer 
          filterBooks={filterBooks}
          />
        <BooksFilter
          searchInputOnChange={searchInputOnChange}
          />
    </main>
  )
}

export default BooksMain