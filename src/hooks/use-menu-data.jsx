// Fetching data of Menu
import { useState, useEffect } from 'react';
import menuApi from "../api-calls/menu-api";
import restaurantsApi from '../api-calls/restaurants-api';

const useMenu = (restaurantId = null) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        let response;
        if (restaurantId) {
          response = await restaurantsApi.getAllRestaurants();
        } else {
          response = await menuApi.getAllMenus();
        }
        console.log("Fetched menu data:", response);
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
  }, [restaurantId]);

  return { menuItems };
};

export default useMenu;
