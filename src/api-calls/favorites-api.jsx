// Favorites-related API calls

import axios from 'axios';
import favoritesUrl from './api-config'; // Import API_URL from api-config.jsx

// Get all favorites http://localhost:4000/favorites/all/{user_id}
const getAllFavorites = async () => {
  try {
    const response = await axios.get(`${favoritesUrl}/all/${user_id}`);
    return response.data;
  } catch (error) {
    console.error('Error Fetching Favorites:', error);
    throw error; // Handle errors more explicitly
  }
};

// Add to favorites http://localhost:4000/favorites/{user_id}
const addToFavorites = async () => {
  try {
    const response = await axios.post(`${favoritesUrl}/${user_id}`);
    return response.data;
  } catch (error) {
    console.error('Error Adding Favorites:', error);
    throw error; // Handle errors more explicitly
  }
};

// Remove to favorites http://localhost:4000/favorites/{user_id}/{favorite_id}
const removeFavorites = async () => {
  try {
    const response = await axios.delete(`${favoritesUrl}/${user_id}/${favorite_id}`);
    return response.data;
  } catch (error) {
    console.error('Error Removing Favorites:', error);
    throw error; // Handle errors more explicitly
  }
};