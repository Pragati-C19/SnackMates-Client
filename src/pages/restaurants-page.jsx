// All restaurants listing page

import React from "react";
import RestaurantCard from "../componets/restaurants-card";

const restaurants = [
  {
    name: "Barbeque Nation",
    description: "A delight for grill lovers...",
    imageUrl: "/path-to-image-1.jpg",
  },
  {
    name: "GreeNox - Healthy",
    description: "Fresh takes on healthy eating...",
    imageUrl: "/path-to-image-2.jpg",
  },
  // Add more restaurant objects here
];

const RestaurantsPage = () => {
    return (
      <main className="p-8 bg-green-50">
      <h2 className="text-center text-2xl font-bold mb-8">Explore Top Restaurants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.name} {...restaurant} />
        ))}
      </div>
    </main>
      );
};

export default RestaurantsPage;
