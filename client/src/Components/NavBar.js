import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/navbar.min.css'

function NavBar() {
  return (
    <div className="navbar_main">
     <Link className='navbar_link' to="/"><h3 className="navbar_logo">Four Letter Books</h3></Link>
     <ul className="navbar_links">
        <Link className="navbar_link" to="/"><li>Home</li></Link>
        <Link className="navbar_link" to="/add_book"><li>Add Book</li></Link>              
     </ul>
    </div>
  )
}

export default NavBar