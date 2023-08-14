import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'

const PublicRout = () => {
  return (
   <Routes>
    <Route exact path='/login' element={<Login/>} key={'login'}/>
      <Route exact path="*" element={<Login />} key={'*'} />
   </Routes>

  )
}

export default PublicRout