// Header componets

import React from 'react';

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
            <link to="../pages/home-page.jsx" className="hover:text-purple-800 cursor-pointer">Home</link>
            <link to="../pages/restaurants-page.js" className="hover:text-purple-800 cursor-pointer">Restaurants</link>
            <link to="#" className="hover:text-purple-800 cursor-pointer">Favorites</link>
            <link to="#" className="hover:text-purple-800 cursor-pointer">Cart</link>
            <link to="#" className="hover:text-purple-800 cursor-pointer">Login</link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
