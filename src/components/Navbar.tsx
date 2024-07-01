"use client"; // This directive marks the component as a Client Component

import { useState } from 'react';
import Link from 'next/link';
import CustomButton from '../components/CustomButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Cerberus</div>
        <div className="hidden md:flex md:items-center space-x-6">
          <Link href="#products" className="text-gray-300 hover:text-white">Products</Link>
          <Link href="#aboutus" className="text-gray-300 hover:text-white">About Us</Link>
          <Link href="#faq" className="text-gray-300 hover:text-white">FAQ</Link>
          <Link href="#register" className="text-gray-300 hover:text-white">Register</Link>
          <Link href="#contactus" className="text-gray-300 hover:text-white">Contact Us</Link>
          <CustomButton text="Get your Cerberus" href="#register" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`absolute top-16 left-0 w-full bg-custom-dark pb-5 px-5 rounded-b-lg ${isOpen ? 'block' : 'hidden'}`}>
        <Link href="#" className="block text-gray-300 hover:text-white px-4 py-2">Products</Link>
        <Link href="#" className="block text-gray-300 hover:text-white px-4 py-2">About Us</Link>
        <Link href="#" className="block text-gray-300 hover:text-white px-4 py-2">FAQ</Link>
        <Link href="#" className="block text-gray-300 hover:text-white px-4 py-2">Register</Link>
        <Link href="#" className="block text-gray-300 hover:text-white px-4 py-2">Contact Us</Link>
        <CustomButton text="Get your Cerberus" href="#register" className="block w-full text-center my-2" />
      </div>
    </nav>
  );
};

export default Navbar;
