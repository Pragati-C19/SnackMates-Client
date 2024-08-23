// Header componets

import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-200 to-yellow-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-purple-800">SnackMates</div>
        <input
          type="text"
          placeholder="Find: Snacks, Types, and Restaurants..."
          className="rounded p-2 w-1/3"
        />
        <nav>
          <ul className="flex space-x-4 text-gray-700">
            <li className="hover:text-purple-800 cursor-pointer">Home</li>
            <li className="hover:text-purple-800 cursor-pointer">Restaurants</li>
            <li className="hover:text-purple-800 cursor-pointer">Favorites</li>
            <li className="hover:text-purple-800 cursor-pointer">Cart</li>
            <li className="hover:text-purple-800 cursor-pointer">Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
