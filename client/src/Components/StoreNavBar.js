import React from 'react'
import '../Styles/storenavbar.min.css'

function StoreNavBar() {
  return (
    <div className='store_nav_bar_main'>
        <p>Book Store</p>
        <p>Four Letter Books</p>
        <div className='store_nav_bar_main'>
          <p>Login</p>
          <p>[O]</p>
          <p>Cart</p>
        </div>
    </div>
  )
}

export default StoreNavBar