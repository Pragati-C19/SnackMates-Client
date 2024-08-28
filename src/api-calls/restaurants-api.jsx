// Restaurant-related API calls

import axios from 'axios';
import restaurantsUrl from './api-config'; // Import API_URL from api-config.jsx

// Get all restaurants http://localhost:4000/restaurants/all
const getAllRestaurants = async () => {
  try {
    const response = await axios.get(`${restaurantsUrl}/all`);
    return response.data;
  } catch (error) {
    console.error('Error Fetching Restaurants:', error);
    throw error; // Handle errors more explicitly
  }
};

// Get specific restaurants menu http://localhost:4000/restaurants/menu/{restaurant_id}
const getRestaurantsByID = async (restaurantId) => {
  try {
    const response = await axios.get(`${restaurantsUrl}/menu/${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurant menu:', error);
    throw error;
  }
};

export default {getAllRestaurants, getRestaurantsByID}