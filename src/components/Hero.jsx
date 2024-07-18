import React from 'react'
import Navbar1 from './Navbar1'
import { Outlet } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <Navbar1/>
      <Outlet/>
    </div>
  )
}

export default Hero
