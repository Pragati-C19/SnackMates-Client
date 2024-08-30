// All restaurants listing page

import React from 'react';
import { Link } from 'react-router-dom';
import useRestaurants from "../hooks/use-restaurants-data"

const RestaurantPage = () =>{
  const { restaurants } = useRestaurants();

  return (
    <section className="p-8 text-center">
      <h2 className="text-4xl font-bold text-purple-800 mb-9">
        Restaurants List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 px-4">
        {restaurants.map((items) => (
          <div key={items.restaurant_id} className="bg-gray-200 shadow-lg rounded-lg flex flex-col md:flex-row">
            <img
              src={items.restaurant_img_url}
              alt={items.restaurant_name}
              className="rounded-t-lg md:w-80 h-full object-cover"
            />
            <div className="flex flex-col justify-between p-4">
              <div className="mb-4">
                <h2 className="text-2xl font-serif text-black mb-4">{items.restaurant_name}</h2>
                <p className="text-gray-800">{items.restaurant_description}</p>
              </div>
              <div className="flex justify-between items-center px-32">
                <p className="text-green-500 font-bold">{items.restaurant_rating}</p>
                <p className="text-gray-500 font-bold">{items.restaurant_location}</p>
                <Link to={`/restaurants/${items.restaurant_id}`} className="font-semibold text-blue-800 hover:text-blue-500">
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RestaurantPage;
