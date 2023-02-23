import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='m-auto  text-center relative h-screen'>
        <p className='my-36 text-5xl underline decoration-rose-700 font-mono text-white'>NotFound "404"</p>
        <Link to='/' className='text-white ring ring-offset-2 ring-rose-700 p-2 rounded-xl hover:contrast-125 bg-rose-700' >Volver a Inicio</Link>
    </div>
  )
}

export default NotFound