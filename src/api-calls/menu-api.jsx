// Menu-related API calls

import axios from 'axios';
import snackmates_base_url from './api-config'; // Import base_url from api-config.jsx

// Get all menus http://localhost:4000/menus/all
const getAllMenus = async () => {
  const url = `${snackmates_base_url}/menus/all`;
  console.log(url)
  console.log(snackmates_base_url)
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error Fetching Menus:', error);
    throw error; // Handle errors more explicitly
  }
};

// Get specific menu http://localhost:4000/menus/{menu_id}
const getMenuByID = async (menuId) => {
  const url = `${snackmates_base_url}/menus/${menuId}`;
  console.log(url)
  console.log(snackmates_base_url)
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error Fetching Menu ID:', error);
    throw error; // Handle errors more explicitly
  }
};

// Get specific menu by type http://localhost:4000/menus/type/{menu_type}
const getMenuByType = async (menuType) => {
  const url = `${snackmates_base_url}/menus/type/${menuType}`;
  console.log(url)
  console.log(snackmates_base_url)
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error Fetching Menu Type:', error);
    throw error; // Handle errors more explicitly
  }
};


export default {getAllMenus, getMenuByID, getMenuByType}