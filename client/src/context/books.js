import React, { useState, createContext, useEffect } from "react";

const BooksContext = createContext();

function BooksProvider({children}){
    const [books, setBooks] = useState()

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


    return <BooksContext.Provider value={{ books }}>
                {children}
            </BooksContext.Provider>
}

export { BooksContext, BooksProvider}