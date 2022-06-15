import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <div className='navbar'>
          <ul className='navbar-list'>
              <li><Link to="/rentals">Rentals</Link></li>
              <li><Link to="/add_rental">Add Rental</Link></li>
              <li><Link to="/edit_delete_rental">Edit/Delete Rental</Link></li>
          </ul>
    </div>
  )
}

export default Navbar