import React from 'react';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
    <div className='w-full h-[10vh] bg-red-400 flex justify-between items-center px-4'>
      <div className="logo text-white text-2xl">Ecommerce</div>
      <div className="navLinks flex space-x-4">
        <Link className="text-white" to="/">HOME</Link>
        <Link className="text-white" to="/about">ABOUT</Link>
        <Link className="text-white" to="/contact">CONTACT US</Link>
        <Link className="text-white" to="/login">LOGIN</Link>
      </div>
      <div className='menu'></div>
    </div>
  );
};

export default Navbar1;
