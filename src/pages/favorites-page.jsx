// Favorites page

// FavoritesPage.jsx
import React from 'react';

const favoriteItems = [
  // Dummy data
  {
    id: 1,
    name: 'Menu 1',
    restaurant: 'Healthy Eats',
    image: 'path/to/image.jpg',
    price: '$10',
  },
  {
    id: 2,
    name: 'Menu 2',
    restaurant: 'Healthy Eats',
    image: 'path/to/image.jpg',
    price: '$10',
  },
  // Add more items as needed
];

const FavoritesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Favorites</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteItems.map(item => (
            <div key={item.id} className="border rounded-lg shadow-md p-4">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4" />
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{item.restaurant}</p>
              <p className="text-lg font-bold mb-4">{item.price}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FavoritesPage;
