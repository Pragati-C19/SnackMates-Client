// Favorites-related API calls

import axios from 'axios';
import favoritesUrl from './api-config'; // Import API_URL from api-config.jsx

// Get all favorites http://localhost:4000/favorites/all/{user_id}
const getAllFavorites = async (userId, token) => {
  try {
    const response = await axios.get(`${favoritesUrl}/all/${userId}`,{
      headers: { Authorization: `Bearer ${token}` }});
    return response.data;
  } catch (error) {
    console.error('Error Fetching Favorites:', error);
    throw error; // Handle errors more explicitly
  }
};

// Add to favorites http://localhost:4000/favorites/{user_id}
const addToFavorites = async (userId, favoriteData, token) => {
  try {
    const response = await axios.post(`${favoritesUrl}/${userId}`, favoriteData, {
      headers: { Authorization: `Bearer ${token}` }});
    return response.data;
  } catch (error) {
    console.error('Error Adding Favorites:', error);
    throw error; // Handle errors more explicitly
  }
};

// Remove to favorites http://localhost:4000/favorites/{user_id}/{favorite_id}
const removeFavorites = async (userId, favoriteId, token) => {
  try {
    const response = await axios.delete(`${favoritesUrl}/${userId}/${favoriteId}`, {
      headers: { Authorization: `Bearer ${token}` }});
    return response.data;
  } catch (error) {
    console.error('Error Removing Favorites:', error);
    throw error; // Handle errors more explicitly
  }
};

export default  { getAllFavorites, addToFavorites, removeFavorites }
