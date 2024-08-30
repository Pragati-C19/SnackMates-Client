//restaurants list for Homepage

import React from 'react';
import { Link } from 'react-router-dom'
import useRestaurants from "../hooks/use-restaurants-data";

function RestaurantCards() {
  const { restaurants } = useRestaurants();

  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold text-purple-800 mb-7">
        Order food online from
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-20">
        {restaurants.map((items) => (
          <div key={items.restaurant_id} className="bg-gray-300 shadow-lg rounded-lg">
            <img src={items.restaurant_img_url} alt={items.restaurant_name} className="rounded-lg mb-2" style={{ width: '400px', height: '250px' }} />
            <div className="flex flex-col flex-grow bg-gray-300">
              <h2 className="text-3xl font-serif text-purple-600 mb-1">{items.restaurant_name}</h2>
              <p className="text-gray-800 mb-4 px-3">{items.restaurant_short_description}</p>
              <div className="flex justify-between mb-2 px-16">
                <p className="text-green-500 font-bold">{items.restaurant_rating}</p>
                <Link to="#" className="font-semibold leading-6 text-blue-800 hover:text-blue-500">
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

export default RestaurantCards;
