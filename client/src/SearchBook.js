import React, { useState } from 'react'
import AddFormFromISBN from './AddFormFromISBN'
import QrReaderContainer from './QrReaderContainer'
import ISBNSearchInput from './ISBNSearchInput'

function SearchBook() {
  const [isScanner, setIsScanner] = useState(false)

  const onNewScanResult = (decodedText, decodedResult) => {
    console.log("App [result]", decodedResult);
    console.log("Text", decodedText)
};

  return (
    <div>
      <ISBNSearchInput />
      <button onClick={() => setIsScanner(!isScanner)}>{isScanner? "Hide Scanner" : "Use Scanner" }</button>
      {isScanner &&
        <QrReaderContainer 
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback ={onNewScanResult}
        />}
      {/* {book&&
      <AddFormFromISBN 
        book={book}
        author={author}
        work={work}
        descriptionArray={descriptionArray}
        bookLanguage={language}
      />} */}
    </div>
  )
}

export default SearchBook