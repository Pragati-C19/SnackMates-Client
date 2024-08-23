// Footer componets

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>© 2024 SnackMates. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              {/* Dummy Social Links */}
              <a href="#" className="text-red-500">YouTube</a>
              <a href="#" className="text-blue-500">Facebook</a>
              <a href="#" className="text-blue-400">Twitter</a>
              <a href="#" className="text-indigo-500">Instagram</a>
            </div>
          </div>
        </footer>
      );
};

export default Footer;