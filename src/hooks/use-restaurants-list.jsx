// Fetching data of Restaurants
import { useState, useEffect } from 'react';
import restaurantApi from "../api-calls/restaurants-api";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch all menus when the component mounts
    const fetchRestaurantItems = async () => {
      try {
        const response = await restaurantApi.getAllRestaurants();
        console.log("Fetched Restaurants data:", response); // Debugging : Log the data
        const data = response.data;
        console.log(response.data);
        if (Array.isArray(data)) {
            setRestaurants(data);
        } else {
          throw new Error("Data fetched is not an array");
        }
      } catch (err) {
        console.error("Error fetching menu items:", err);
      }
    };

    fetchRestaurantItems();
  }, []);

  return { restaurants };
};

export default useRestaurants;
