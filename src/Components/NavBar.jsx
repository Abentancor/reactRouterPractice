import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-900 flex justify-around items-center p-4 text-white text-lg font-bold'>
          <NavLink className='ring ring-offset-2 ring-violet-500 px-2 rounded-xl hover:contrast-125 bg-violet-500' to='/'>Inico</NavLink>
          <NavLink className='ring ring-offset-2 ring-indigo-500 px-2 rounded-xl hover:contrast-125 bg-indigo-500' to='/contact'>Contacto</NavLink>
          <NavLink className='ring ring-offset-2 ring-blue-500 px-2 rounded-xl hover:contrast-125 bg-blue-500' to='/blog'>Blog</NavLink>
    </div>

  )
}

export default NavBar