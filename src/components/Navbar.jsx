import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import LaptopImage from '../assets/logo.jpg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-20 mx-auto px-12 text-white bg-[linear-gradient(to_right,#260c49_98%,#260c4a_90%)]'>
      <h1 className='w-full text-3xl font-bold flex items-center'>
        <img src={LaptopImage} alt='Logo' className='h-8 w-8 mr-2' />
        <span className='text-[#00df9a] text-2xl pl-2'>Dense Vector - Enterprise</span>
           </h1>
      <ul className='hidden md:flex items-center space-x-8'>
        <li className='p-4 text-lg'>Home</li>
        <li className='p-4 text-lg'>About</li>
        <li className='p-4 text-lg'>Services</li>
        <li className="flex items-center">
    <button className="px-4 py-2 border border-white text-white bg-transparent rounded whitespace-nowrap mr-2">
      Log In
    </button>
    <button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-pink-400 text-white rounded">
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
