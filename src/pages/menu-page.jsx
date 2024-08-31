import React, { useState, useEffect } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import useRestaurants from "../hooks/use-restaurants-list"
import useMenu from "../hooks/use-menu-data";
import useFavorites from "../hooks/use-favorites-data";
import userCart from "../hooks/use-cart"

const MenuPage = ({searchQuery}) => {

  const [filteredItems, setFilteredItems] = useState([]);
  const { restaurants } = useRestaurants();
  const { menuItems } = useMenu();
  const { addToFavorites } = useFavorites();
  const { addToCart } = userCart();

  // This useEffect is for Search bar menu Fetching
  useEffect(() => {
    if (searchQuery) {
      const filtered = menuItems.filter(item =>
        item.menu_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(menuItems);
    }
  }, [searchQuery, menuItems]);

  const handleAddToFavorites = async (id) => {
    const favoriteData = { menu_id: id };
    console.log("handleAddToFavorites : favriteData ",favoriteData)
    await addToFavorites(favoriteData);
  };

  const handleAddToCart = async (id) => {
    const cartData = { menu_id: id };
    console.log("handleAddToCart : cartData ",cartData)
    await addToCart(cartData)
  };

  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold text-purple-800 mb-7">Menu List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {filteredItems.map((item) => (
          <div
            key={item.menu_id}
            className="bg-gray-300 shadow-lg rounded-lg flex flex-col">
            <img
              src={item.menu_img_url}
              alt={item.menu_name}
              className="rounded-t-lg w-full h-60 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-3xl font-serif text-black mb-2">
                {item.menu_name}
              </h3>
              <p className="font-sans text-gray-700 mb-1">
                  {item.menu_description}
              </p>
              <div className="flex justify-between items-center mb-4 px-5">
                <p className="text-xl font-sans text-gray-800">
                {restaurants.find(r => r.restaurant_id === item.restaurant_id)?.restaurant_name || 'Unknown Restaurant'}
                </p>
                <p className="text-gray-700 text-xl">{item.menu_price}</p>
              </div>
              <div className="flex justify-between mt-auto px-4">
                <button
                  onClick={() => handleAddToCart(item.menu_id)}
                  className="bg-blue-300 text-black px-4 py-2 rounded flex items-center">
                  <FaCartPlus className="mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => handleAddToFavorites(item.menu_id)}
                  className="bg-red-500 text-white px-4 rounded flex items-center">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuPage;
