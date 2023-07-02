import React from "react"



function ISBNSearchInput({isbn, setIsbn, submitSearch}){

  return (
    <form onSubmit={submitSearch}>
        <input
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button>Search</button>
    </form>
    )
}

export default ISBNSearchInput
