import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
        <h2 className='text-xxl'>Sheryiance 
          <input className='text-black ' type="Hellooo Boyss" />
        </h2>
        <div className='flex gap-10 text-lg underline'>
            <Link to={'/'}>Homee/</Link>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/Product'}>Product</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/Contact'}>Contact</Link>
        </div>
    </div>
  )
}

export default Header