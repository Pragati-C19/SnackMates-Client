import React, { useEffect, useState } from 'react';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import favoritesApi from '../api-calls/favorites-api';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const userId = 1; //TODO: Replace with actual user ID
  const token = 'your_auth_token'; //TODO: Replace with actual auth token

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await favoritesApi.getAllFavorites(userId, token);
        // Ensure data is an array
        setFavorites(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching favorites:', error);
        setFavorites([]); // Set to empty array on error
      }
    };
    fetchFavorites();
  }, [userId, token]);

  const handleRemoveFromFavorites = async (itemId) => {
    try {
      await favoritesApi.removeFavorites(userId, itemId, token);
      setFavorites(favorites.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold text-purple-800 mb-7">Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {favorites.map((item) => (
          <div key={item.id} className="bg-gray-300 shadow-lg rounded-lg flex flex-col">
            <img
              src={item.imageSrc}
              alt={item.menuName}
              className="rounded-t-lg w-full h-60 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-3xl font-serif text-black mb-2">{item.menuName}</h3>
              <div className="flex justify-between items-center mb-4 px-5">
                <p className="text-xl font-sans text-gray-700">{item.restaurantName}</p>
                <p className="text-gray-700 text-xl">{item.price}</p>
              </div>
              <div className="flex justify-between mt-auto px-4">
                <button
                  onClick={() => handleAddToCart(item.id)}
                  className="bg-blue-300 text-black px-4 py-2 rounded flex items-center"
                >
                  <FaCartPlus className="mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemoveFromFavorites(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
                >
                  <FaHeart className="mr-2" />
                  Remove from Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavoritesPage;
