import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import PostIdPage from '../pages/PostIdPage'

const Rout = () => {
  return (
      <Routes>
          <Route exact path='/about' element={<About />} key={'/about'} />
          <Route exact path='/posts' element={<Posts />} key={'/posts'} />
          <Route exact path='/posts/:id' element={<PostIdPage />} key={'/posts/:id'} />
          <Route exact path="*" element={<Posts />} key={'*'} />
      </Routes>
  )
}

export default Rout