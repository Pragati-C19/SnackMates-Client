// Favorites-related API calls

import axios from 'axios';
import snackmates_base_url from './api-config'; // Import base_url from api-config.jsx

// Get all favorites http://localhost:4000/favorites/all/{user_id}
const getAllFavorites = async (userId, token) => {
  const url = `${snackmates_base_url}/favorites/all/${userId}`;
  console.log(url)
  console.log(snackmates_base_url)
  try {
    const response = await axios.get(url,{
      headers: { Authorization: `${token}` }});
    return response.data;
  } catch (error) {
    console.error('Error Fetching Favorites:', error);
    throw error; // Handle errors more explicitly
  }
};

// Add to favorites http://localhost:4000/favorites/{user_id}
const addToFavorites = async (userId, favoriteData, token) => {
  const url = `${snackmates_base_url}/favorites/${userId}`;
  console.log(url)
  console.log(snackmates_base_url)
  try {
    const response = await axios.post(url, favoriteData, {
      headers: { Authorization: `${token}` }});
      console.log("response from addToFavotites API : ", favoriteData)
    return response.data;

  } catch (error) {
    console.error('Error Adding Favorites:', error);
    throw error; // Handle errors more explicitly
  }
};

// Remove to favorites http://localhost:4000/favorites/{user_id}/{favorite_id}
const removeFavorites = async (userId, favoriteId, token) => {
  const url = `${snackmates_base_url}/favorites/${userId}/${favoriteId}`;
  console.log(url)
  console.log(snackmates_base_url)
  try {
    const response = await axios.delete(url, {
      headers: { Authorization: `${token}` }});
    return response.data;
  } catch (error) {
    console.error('Error Removing Favorites:', error);
    throw error; // Handle errors more explicitly
  }
};

export default  { getAllFavorites, addToFavorites, removeFavorites }
