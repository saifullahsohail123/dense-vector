import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import LaptopImage from '../assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const location = useLocation();
  
  return (
    <div className='flex justify-between items-center h-20 mx-auto px-12 text-white bg-[linear-gradient(to_right,#393a3c_100%,#2f2f2f_90%)]'>
      <h1 className='w-full text-3xl font-bold flex items-center'>
        <img src={LaptopImage} alt='Logo' className='h-8 w-8 mr-2' />
        <span className='text-[#fff] text-2xl pl-2'>Dense Vector - Enterprise</span>
           </h1>
      <ul className='hidden md:flex items-center space-x-8'>
      <li className={`p-4 text-lg ${location.pathname === '/' ? 'text-[#4D4D4D]' : ''}`}>
        <Link to="/">Home</Link>
      </li>
      <li className={`p-4 text-lg ${location.pathname === '/about' ? 'text-[#4D4D4D]' : ''}`}>
        <Link to="/about">About</Link>
      </li>
      <li className={`p-4 text-lg ${location.pathname === '/services' ? 'text-[#4D4D4D]' : ''}`}>
        <Link to="/services">Services</Link>
      </li>
        <li className="flex items-center">
    <button className="px-4 py-2 border border-white text-white bg-transparent rounded whitespace-nowrap mr-2">
      Log In
    </button>
    <button className="px-4 py-2 bg-gradient-to-r from-[#4D4D4D] to-[#1A1A1A] text-white rounded">
      Signup
    </button>
  </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'><button className="px-4 py-2 border border-white text-white bg-transparent rounded whitespace-nowrap mr-2">
      Log In
    </button></li>
          <li className='p-4'>    <button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-pink-400 text-white rounded">
      Signup
    </button></li>
      </ul>
    </div>
  );
};

export default Navbar;
