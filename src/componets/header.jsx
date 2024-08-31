// Header componets

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Logo from '../imgs/logo.png'
import useAuth from '../hooks/use-auth';

const Header = ({ setSearchQuery }) => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate()
  const { isLoggedIn , logoutUser } = useAuth()
  console.log('isLoggedIn in header:', isLoggedIn); // Debugging line

  const handleSearch = (e) => {
    setSearchQuery(searchTerm); 
    navigate('/menus')
  };

  // const handleLogout = async () => {
  //     try {
  //       await authApi.logoutUser();
  //       localStorage.removeItem('authId'); // 'authId' is where the authId is stored
  //       localStorage.removeItem('authToken'); // 'authToken' is where the token is stored
  //       setIsLoggedIn(false);
  //       navigate('/login');
  //     } catch (error) {
  //       console.error('Logout failed:', error);
  //     }
  // };

  const handleLogout = async () => {
    try {
      await logoutUser()
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
};

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
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Trigger search on Enter key press
        />
      <div className="flex space-x-10">
        <Link to="/" className="py-2 hover:text-gray-300">Home</Link>
        <Link to="/restaurants" className="py-2 hover:text-gray-300">Restaurants</Link>
        <Link to="/menus" className="py-2 hover:text-gray-300">Menu</Link>
        <Link to="/favorites" className="py-2 hover:text-gray-300">Favorites</Link>
        <Link to="/cart" className="py-2 hover:text-gray-300">Cart</Link>
        <div className="py-2">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-white text-black px-3 py-1 rounded-md h-10 hover:bg-blue-100"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="bg-white text-black px-3 py-1 rounded-md h-10 hover:bg-blue-100">Login</Link>
            )}
          </div>
      </div>
    </nav>
  );
};

export default Header;