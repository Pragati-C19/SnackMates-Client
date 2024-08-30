import React from 'react';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import useFavorites from '../hooks/use-favorites-data';
import useMenu from '../hooks/use-menu-data';

const FavoritesPage = () => {

  const { favorites, removeFavorites } = useFavorites()
  const { menuItems } = useMenu()
 
  const handleRemoveFavorites = async (id) => {
    console.log("removeFavorites ID : ", id)
    await removeFavorites(id);
  };

  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold text-purple-800 mb-7">Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {favorites.length > 0 ? (
          favorites.map((items) => {
            const menuItem = menuItems.find(menu => menu.menu_id === items.menu_id);
            if (!menuItem) return null; // Skip if no matching menu item

            return (
              <div key={items.favorite_id} className="bg-gray-300 shadow-lg rounded-lg flex flex-col">
                <img
                  src={menuItem.menu_img_url}
                  alt={menuItem.menu_name}
                  className="rounded-t-lg w-full h-60 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-3xl font-serif text-black mb-2">{menuItem.menu_name}</h3>
                  <div className="flex justify-between items-center mb-4 px-5">
                    <p className="text-xl font-sans text-gray-700">{menuItem.restaurant_name || 'Unknown Restaurant'}</p>
                    <p className="text-gray-700 text-xl">{menuItem.menu_price}</p>
                  </div>
                  <div className="flex justify-between mt-auto px-4">
                    <button
                      onClick={() => handleAddToCart(menuItem.menu_id)}
                      className="bg-blue-300 text-black px-4 py-2 rounded flex items-center"
                    >
                      <FaCartPlus className="mr-2" />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleRemoveFavorites(items.favorite_id)}
                      className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
                    >
                      <FaHeart className="mr-2" />
                      Remove from Favorites
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-xl text-gray-700">You have no favorite items.</p>
        )}
      </div>
    </section>
  );
};

export default FavoritesPage
