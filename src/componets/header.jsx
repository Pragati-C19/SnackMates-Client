// Header componets

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-200 to-yellow-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-purple-800">SnackMates</div>
        <input
          type="text"
          placeholder="Feelin’ Snacky? Type and Attack-y!..."
          className="rounded p-2 w-1/3"
        />
        <nav>
            <Link to="/" className="hover:text-purple-800 cursor-pointer">Home</Link>
            <Link to="/restaurants" className="hover:text-purple-800 cursor-pointer">Restaurants</Link>
            <Link to="/menus" className="hover:text-purple-800 cursor-pointer">Menus</Link>
            <Link to="/favorites" className="hover:text-purple-800 cursor-pointer">Favorites</Link>
            <Link to="#" className="hover:text-purple-800 cursor-pointer">Cart</Link>
            <Link to="#" className="hover:text-purple-800 cursor-pointer">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
