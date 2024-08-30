// Restaurant-related API calls

import axios from 'axios';
import snackmates_base_url from './api-config'; // Import base_url from api-config.jsx

// Get all restaurants http://localhost:4000/restaurants/all
const getAllRestaurants = async () => {
  const url = `${snackmates_base_url}/restaurants/all`;
  console.log(url)
  console.log(snackmates_base_url)
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error Fetching Restaurants:', error);
    throw error; // Handle errors more explicitly
  }
};

// Get specific restaurants menu http://localhost:4000/restaurants/menu/{restaurant_id}
const getRestaurantsMenu = async (restaurantId) => {
  const url = `${snackmates_base_url}/restaurants/menu/${restaurantId}`;
  console.log(url)
  console.log(snackmates_base_url)
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurant menu:', error);
    throw error;
  }
};

export default {getAllRestaurants, getRestaurantsMenu}