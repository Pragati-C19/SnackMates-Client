// Carts-related API calls

import axios from 'axios';
import snackmates_base_url from './api-config'; // Import base_url from api-config.jsx

// Get all cart http://localhost:4000/cart/all/{user_id}
const getAllCartMenu = async (userId, token) => {
  const url = `${snackmates_base_url}/cart/all/${userId}`;
  console.log(url)
  console.log(snackmates_base_url)
  try {
    const response = await axios.get(url,{
      headers: { Authorization: `${token}` }});
    return response.data;
  } catch (error) {
    console.error('Error Fetching Cart Data:', error);
    throw error; // Handle errors more explicitly
  }
};

// Add to cart http://localhost:4000/cart/{user_id}
const addToCart = async (userId, cartData, token) => {
  const url = `${snackmates_base_url}/cart/${userId}`;
  console.log(url)
  console.log(snackmates_base_url)
  try {
    const response = await axios.post(url, cartData, {
      headers: { Authorization: `${token}` }});
      console.log("response from addToCart API : ", cartData)
    return response.data;

  } catch (error) {
    console.error('Error Adding Menu To Cart:', error);
    throw error; // Handle errors more explicitly
  }
};

// Remove to cart http://localhost:4000/cart/{user_id}/{cart_id}
const removeFromCart = async (userId, cartId, token) => {
  const url = `${snackmates_base_url}/cart/${userId}/${cartId}`;
  console.log(url)
  console.log(snackmates_base_url)
  try {
    const response = await axios.delete(url, {
      headers: { Authorization: `${token}` }});
    return response.data;
  } catch (error) {
    console.error('Error Removing Menu from Cart:', error);
    throw error; // Handle errors more explicitly
  }
};

export default  { getAllCartMenu, addToCart, removeFromCart }
