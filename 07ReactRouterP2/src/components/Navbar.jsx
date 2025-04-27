import React from 'react'
import logo from '../assets/logo2.avif'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt="" style={{ height: '70px', width: '70px', borderRadius: '50%', objectFit: 'cover' }} />
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/products'><li>Products</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/contact'><li>Contacts</li></NavLink>
      </ul>
      <button>Get Started</button>
    </div>
  )
}
