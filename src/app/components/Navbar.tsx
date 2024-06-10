import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800">
      <div className="text-2xl font-bold">Cerberus</div>
      <div className="space-x-6">
        <Link href="#"><a className="hover:text-gray-400">Products</a></Link>
        <Link href="#"><a className="hover:text-gray-400">About Us</a></Link>
        <Link href="#"><a className="hover:text-gray-400">FAQ</a></Link>
        <Link href="#"><a className="hover:text-gray-400">Register</a></Link>
        <Link href="#"><a className="hover:text-gray-400">Contact Us</a></Link>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Try Cerberus
      </button>
    </nav>
  );
};

export default Navbar;