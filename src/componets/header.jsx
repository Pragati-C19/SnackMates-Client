// Header componets

import React, { useState } from 'react';
import Logo from '../imgs/logo.png'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  //TODO: Search query is need to be added which I have store in search-bar.js for now

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="mx-auto h-8 w-auto px-6" />
      </div>
      <input
          type="text"
          placeholder="Feelin’ Snacky? Type and Attack-y!..."
          className="block w-1/4 rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      <div className="flex space-x-10">
        <a href="/" className="py-2 hover:text-gray-300">Home</a>
        <a href="/restaurants" className="py-2 hover:text-gray-300">Restaurants</a>
        <a href="/menus" className="py-2 hover:text-gray-300">Menu</a>
        <a href="/favorites" className="py-2 hover:text-gray-300">Favorites</a>
        <a href="/cart" className="py-2 hover:text-gray-300">Cart</a>
        <a href="/login" className="bg-white text-black px-3 py-2 rounded-md h-10 hover:bg-blue-100">Login</a>
      </div>
    </nav>
  );
};

export default Header;