import React, { useState, useEffect } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import favoritesApi from "../api-calls/favorites-api";
import menuApi from "../api-calls/menu-api";

// Sample data array for menu items
const menussItems = [
  {
    id: 1,
    menuName: "Spaghetti Carbonara",
    restaurantName: "GreeNox - Healthy",
    price: "$12.99",
    imageSrc:
      "https://i.pinimg.com/564x/74/cc/90/74cc90b5f630d02fc220d9ef4da93dca.jpg",
  },
  {
    id: 2,
    menuName: "Classic Burger",
    restaurantName: "The Good Bowl",
    price: "$9.99",
    imageSrc:
      "https://i.pinimg.com/564x/22/29/0d/22290dcfd246cc18d795fe19750e6e68.jpg",
  },
  {
    id: 3,
    menuName: "Margherita Pizza",
    restaurantName: "Tasty Bites",
    price: "$14.99",
    imageSrc:
      "https://i.pinimg.com/564x/f5/f4/9d/f5f49dea66fcf93b932c8238b68e4f5e.jpg",
  },
  {
    id: 4,
    menuName: "Chicken Teriyaki",
    restaurantName: "Fresh Eats",
    price: "$11.49",
    imageSrc:
      "https://i.pinimg.com/564x/85/ab/9f/85ab9f58b75a73fbb80c9632358a6473.jpg",
  },
  {
    id: 5,
    menuName: "Ramen Noodles",
    restaurantName: "Flavor Fusion",
    price: "$13.99",
    imageSrc:
      "https://i.pinimg.com/564x/99/2a/08/992a0851688f9f78bbb49a59bfc42ec2.jpg",
  },
  {
    id: 6,
    menuName: "Mango Smoothie",
    restaurantName: "Quick Bites",
    price: "$6.49",
    imageSrc:
      "https://i.pinimg.com/736x/5e/d2/4e/5ed24e98c2f75e883d56e5618730f389.jpg",
  },
  {
    id: 7,
    menuName: "Caesar Salad",
    restaurantName: "GreeNox - Healthy",
    price: "$8.99",
    imageSrc:
      "https://i.pinimg.com/564x/9a/41/b0/9a41b042e5524f57071e496adc460183.jpg",
  },
  {
    id: 8,
    menuName: "BBQ Chicken Wings",
    restaurantName: "The Good Bowl",
    price: "$10.99",
    imageSrc:
      "https://i.pinimg.com/564x/00/a6/d3/00a6d30d09900219c9726809d53ac759.jpg",
  },
  {
    id: 9,
    menuName: "Pepperoni Pizza",
    restaurantName: "Tasty Bites",
    price: "$15.49",
    imageSrc:
      "https://i.pinimg.com/564x/37/b6/60/37b660cb40988dda83c8d345f62c83da.jpg",
  },
  {
    id: 10,
    menuName: "Garlic Pasta",
    restaurantName: "Fresh Eats",
    price: "$12.49",
    imageSrc:
      "https://i.pinimg.com/564x/8e/f6/e0/8ef6e0a0e7dac0527b23aa90422e2e0d.jpg",
  },
  {
    id: 11,
    menuName: "Fruit Smoothie",
    restaurantName: "Quick Bites",
    price: "$8.99",
    imageSrc:
      "https://i.pinimg.com/736x/bf/43/c5/bf43c507933b4581953604d0c8ab77d4.jpg",
  },
  {
    id: 12,
    menuName: "Chicken Tacos",
    restaurantName: "Fresh Eats",
    price: "$9.99",
    imageSrc:
      "https://i.pinimg.com/564x/05/a8/20/05a820af66519b0763fab82a98b4f421.jpg",
  },
];

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch all menus when the component mounts
    const fetchMenuItems = async () => {
      try {
        const response = await menuApi.getAllMenus();
        console.log("Fetched data:", response); // Log the data
        const data = response.data;
        // setMenuItems(response.data);
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
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-300 shadow-lg rounded-lg flex flex-col">
            <img
              src={item.imageSrc}
              alt={item.name}
              className="rounded-t-lg w-full h-60 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-3xl font-serif text-black mb-2">
                {item.menuName}
              </h3>
              <div className="flex justify-between items-center mb-4 px-5">
                <p className="text-xl font-sans text-gray-700">
                  {item.restaurantName}
                </p>
                <p className="text-gray-700 text-xl">{item.price}</p>
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
