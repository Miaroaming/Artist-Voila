import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='logo'>
            <h2> VOILA </h2>
        </div>
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
