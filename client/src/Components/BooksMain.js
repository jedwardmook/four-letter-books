import React, { useEffect, useState } from 'react'

function BooksMain() {
    const [books, setBooks] = useState({})

    useEffect(() => {
        fetch('/books')
            .then((response) => {
                if (response.ok) {
                response.json().then((books) => {
                    setBooks(books)
                    });
                } else {
                }
            })
    }, [])

  return (
    <>
        <h2>Books Archived</h2>
        <table>

        </table>
    </>
  )
}

export default BooksMain