// Menu-related API calls

import axios from 'axios';
import menuUrl from './api-config'; // Import API_URL from api-config.jsx

// Get all menus http://localhost:4000/menus/all
const getAllMenus = async () => {
  try {
    const response = await axios.get(`${menuUrl}/all`);
    return response.data;
  } catch (error) {
    console.error('Error Fetching Menus:', error);
    throw error; // Handle errors more explicitly
  }
};

// Get specific menu http://localhost:4000/menus/{menu_id}
const getMenuByID = async (menuId) => {
  try {
    const response = await axios.get(`${menuUrl}/${menuId}`);
    return response.data;
  } catch (error) {
    console.error('Error Fetching Menu ID:', error);
    throw error; // Handle errors more explicitly
  }
};

// Get specific menu by type http://localhost:4000/menus/type/{menu_type}
const getMenuByType = async (menuType) => {
  try {
    const response = await axios.get(`${menuUrl}/type/${menuType}`);
    return response.data;
  } catch (error) {
    console.error('Error Fetching Menu Type:', error);
    throw error; // Handle errors more explicitly
  }
};


export default {getAllMenus, getMenuByID, getMenuByType}