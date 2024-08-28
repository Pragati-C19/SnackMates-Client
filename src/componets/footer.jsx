// Footer componets

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-6">
  <div className="text-center">
  <div className="flex justify-center space-x-7 mb-4 text-2xl">
      <a href="#" className="text-blue-500">
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a href="#" className="text-pink-500">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="#" className="text-blue-400">
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href="#" className="text-red-600">
        <i className="fa-brands fa-youtube"></i>
      </a>
    </div>
    <p className="text-sm">
      with 💖 pragati_c19, &copy; 2024 SnackMates. All rights reserved.
    </p>
    
  </div>
</footer>

  );
};

export default Footer;
