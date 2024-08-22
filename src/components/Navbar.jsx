import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        {/* band name title */}
        <h2 className='header-title'> VOILA </h2>
        {/* list items/links */}
        <ul>
            <Link to='/'> Home </Link>
            <Link to='/biography'> Biography </Link>
            <Link to='/gallery'> Gallery </Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
