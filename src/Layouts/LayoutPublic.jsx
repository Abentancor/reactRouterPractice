import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  return (
    <div className='container absolute bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-900'>
        <Outlet/>
        <footer className=' relative bottom-0 w-full bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-900 flex justify-around items-center p-4 text-white text-lg font-bold'>El footer</footer>
    </div>
  )
}

export default LayoutPublic