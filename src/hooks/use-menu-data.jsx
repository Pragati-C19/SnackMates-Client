// getAllMenus API's hook is here

import { useState, useEffect } from 'react';
import menuApi from "../api-calls/menu-api";
import useRestaurants from './use-restaurants-list';

const useMenu = (restaurantId = null) => {
  const [menuItems, setMenuItems] = useState([]);
  const {restaurants} = useRestaurants()
  console.log("restautans in use-menu-data: ",restaurants)

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        let response;
        if (restaurantId) {
          response = restaurants;
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
