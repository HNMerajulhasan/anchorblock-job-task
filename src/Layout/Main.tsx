import React from 'react'
import Navbar from '../nabvar/Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default Main