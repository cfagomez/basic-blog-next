import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-center'>
        <a href='/' className='bg-dark text-primary none-decoration p-link b-link cursor-pointer m-right'>Home</a>
        <a href='/nosotros' className='bg-dark text-primary none-decoration p-link b-link cursor-pointer m-right'>Nosotros</a>
        <a href='/blog' className='bg-dark text-primary none-decoration p-link b-link cursor-pointer'>Blog</a>
    </nav>
  )
}

export default Navbar
