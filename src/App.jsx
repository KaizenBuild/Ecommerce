import React from 'react'
import Hero from './components/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/NavLinks/Home'
import About from './components/NavLinks/About'
import Contact from './components/NavLinks/Contact'
import Login from './components/NavLinks/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
