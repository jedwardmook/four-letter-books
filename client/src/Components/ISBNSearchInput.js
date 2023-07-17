import React from "react"
import "../Styles/isbnsearchinput.min.css"



function ISBNSearchInput({isbn, setIsbn, submitSearch}){

  return (
    <form onSubmit={submitSearch}>
        <input
          className="isbn_search_input"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button className="isbn_search_button">Search</button>
    </form>
    )
}

export default ISBNSearchInput
