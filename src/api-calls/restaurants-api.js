// Restaurant-related API calls

import axios from 'axios';

const baseUrl = 'http://localhost:4000/'; // Backend API URL


// Get all restaurants http://localhost:4000/restaurants/all
const getAllRestaurants = async () => {
  try {
    const response = await axios.get(`${baseUrl}/restaurants/all`);
    return response.data;
  } catch (error) {
    console.error('Error Fetching Restaurants:', error);
    throw error; // Handle errors more explicitly
  }
};

// Get specific restaurants menu http://localhost:4000/restaurants/menu/{restaurant_id}

//TODO: Similar functions for other API endpoints (e.g., fetchMenuItems, fetchRestaurantDetails)

export default getAllRestaurants