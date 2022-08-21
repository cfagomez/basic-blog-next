import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
        <div className='bg-dark'>
            <hr />
            <h1 className='text-center text-light'>Blog-Next</h1>
            <hr />
            <p className='text-center text-primary'>Donec tempor sem eget velit.</p>
            <hr />
        </div>
        <Navbar />
    </header>
  )
}

export default Header
