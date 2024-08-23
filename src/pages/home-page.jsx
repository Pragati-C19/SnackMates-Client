// Home page

import React from 'react';
import Header from "../componets/header";
import Footer  from "../componets/footer";

const HomePage = () => {
    return (
        <div>
          <Header />
          
          <section className="bg-green-100 p-8 text-center">
            <h1 className="text-5xl font-bold text-purple-800 mb-4">Hungry?!</h1>
            <p className="text-xl text-gray-700 mb-6">
              We've Got You Covered! Get Your Favorite Snacks Delivered Hot and Fresh in 30 Minutes or Less... Anytime, Anywhere!
            </p>
            <img
              src="https://via.placeholder.com/150"
              alt="Delivery"
              className="mx-auto"
            />
          </section>
    
          <section className="p-8 text-center">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">
              Inspiration for your first order
            </h2>
            <div className="flex justify-center space-x-4 overflow-x-auto">
              {/* Dummy Menu Type Data */}
              <div className="flex-shrink-0">
                <img src="https://via.placeholder.com/100" alt="Pasta" className="rounded-full mx-auto mb-2" />
                <p className="text-purple-800">Pasta</p>
              </div>
              <div className="flex-shrink-0">
                <img src="https://via.placeholder.com/100" alt="Burger" className="rounded-full mx-auto mb-2" />
                <p className="text-purple-800">Burger</p>
              </div>
              {/* Add more menu types here */}
            </div>
          </section>
    
          <section className="p-8 text-center">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">
              Order food online in
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Dummy Restaurant Data */}
              <div className="bg-white p-4 shadow-lg rounded-lg">
                <img src="https://via.placeholder.com/300x200" alt="Restaurant" className="rounded mb-2" />
                <h3 className="text-xl font-bold text-purple-800">GreeNox - Healthy</h3>
                <p className="text-green-500 font-bold">4.9 ★</p>
                <button className="mt-2 bg-purple-500 text-white p-2 rounded">Order Now</button>
              </div>
              <div className="bg-white p-4 shadow-lg rounded-lg">
                <img src="https://via.placeholder.com/300x200" alt="Restaurant" className="rounded mb-2" />
                <h3 className="text-xl font-bold text-purple-800">The Good Bowl</h3>
                <p className="text-green-500 font-bold">4.8 ★</p>
                <button className="mt-2 bg-purple-500 text-white p-2 rounded">Order Now</button>
              </div>
              {/* Add more restaurant cards here */}
            </div>
          </section>
    
          <Footer />
        </div>
      );
};
  
export default HomePage;

