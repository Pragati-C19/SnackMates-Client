import React, { useState, useEffect } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import favoritesApi from "../api-calls/favorites-api";
import menuApi from "../api-calls/menu-api";

const MenuPage = ({searchQuery}) => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // This is for getting all menus
  useEffect(() => {
    // Fetch all menus when the component mounts
    const fetchMenuItems = async () => {
      try {
        const response = await menuApi.getAllMenus();
        console.log("Fetched data:", response); // Debugging : Log the data
        const data = response.data;
        console.log(response.data);
        if (Array.isArray(data)) {
          setMenuItems(data);
        } else {
          throw new Error("Data fetched is not an array");
        }
      } catch (err) {
        console.error("Error fetching menu items:", err);
      }
    };

    fetchMenuItems();
  }, []);

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


  const userId = 1; //TODO: Replace with actual user ID
  const token = localStorage.getItem("authToken"); // Retrieve token from local storage

  const handleAddToFavorites = async (id) => {
    const itemToAdd = menuItems.find((item) => item.id === id);
    if (itemToAdd) {
      try {
        await favoritesApi.addToFavorites(userId, itemToAdd, token);
        console.log(`Added item ${id} to favorites`);
      } catch (error) {
        console.error("Error adding to favorites:", error);
      }
    } else {
      console.log(`Item ${id} not found`);
    }
  };

  const handleAddToCart = (id) => {
    console.log(`Added item ${id} to cart`);
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
              <p className="text-xl font-sans text-gray-700">
                  {item.menu_description}
              </p>
              <div className="flex justify-between items-center mb-4 px-5">
                <p className="text-xl font-sans text-gray-700">
                  {item.restaurantName}
                </p>
                <p className="text-gray-700 text-xl">{item.menu_price}</p>
              </div>
              <div className="flex justify-between mt-auto px-4">
                <button
                  onClick={() => handleAddToCart(item.id)}
                  className="bg-blue-300 text-black px-4 py-2 rounded flex items-center">
                  <FaCartPlus className="mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => handleAddToFavorites(item.id)}
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
