import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import LayoutPublic from './Layouts/LayoutPublic'
import Blog from './Pages/Blog'
import BlogDetails from './Pages/BlogDetails'
import Contact from './Pages/Contact'
import Inicio from './Pages/Inicio'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <>

    <NavBar/>
    <Routes>
      <Route path='/' element={<LayoutPublic/>} >
        <Route element={<Inicio/>} index/>
        <Route element={<Blog/>} path='/blog'/>
        <Route element={<BlogDetails/>} path='/blog/:id'/>
        <Route element={<Contact/>} path='/contact'/>
        <Route element={<NotFound/>} path='*' />
      </Route>
    </Routes>
    </>
  )
}

export default App