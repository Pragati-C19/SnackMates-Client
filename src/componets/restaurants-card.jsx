// Card component for restaurant listings
import React from 'react';

const RestaurantCard = ({ name, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="p-4 flex justify-between items-center">
        <span className="text-green-500 font-bold">View More</span>
        <span className="text-yellow-500">⭐ 4.5</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
