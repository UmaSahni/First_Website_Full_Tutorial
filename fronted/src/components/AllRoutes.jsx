import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AdminPage from '../Pages/AdminPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/admin' element={<AdminPage/>} />
    </Routes>
  )
}

export default AllRoutes