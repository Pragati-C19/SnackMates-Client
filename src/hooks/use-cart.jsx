// Hook is for All Cart API's

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cartApi from "../api-calls/cart-api";

const useCart = () => {

  const [cartMenu, setCartMenu] = useState([]);
  const userId = localStorage.getItem("authId") 
  const token = localStorage.getItem("authToken"); 
  const navigate = useNavigate();

  // Fetch all Cart Menus
  const fetchCartMenu = async () => {
    try {
      const response = await cartApi.getAllCartMenu(userId, token)
      setCartMenu(response.data);
    } catch (error) {
      console.error("Error Fetching Cart Menu:", error);
      throw error;
    }
  };

  // Add to Cart
  const addToCart = async (cartData) => {
    try {
      const response = await cartApi.addToCart(userId, cartData, token)
      setCartMenu([...cartMenu, response.data]); // Add the new Menu to the state
    } catch (error) {
      console.error("Error Adding Menu to Cart:", error);
      throw error;
    }
  };

  // Remove from cart
  const removeFromCart = async (cartId) => {
    try {
      await cartApi.removeFromCart(userId, cartId, token)
      setCartMenu(cartMenu.filter(item => item.menu_id !== cartId)); // Update state after removing
      navigate('/menus')
    } catch (error) {
      console.error("Error Removing Cart Menu:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (userId && token) {
      fetchCartMenu(); // Fetch Cart Menus when the component mounts
    }
  }, [userId, token]);

  return { cartMenu, addToCart, removeFromCart };
};

export default useCart;
