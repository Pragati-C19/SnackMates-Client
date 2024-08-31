// Hook is for All Cart API's

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cartApi from "../api-calls/cart-api";
import useMenu from "./use-menu-data";

const useCart = () => {

  const [cartItems, setcartItems] = useState([]);
  const [cartDetails, setCartDetails] = useState([]);
  const { menuItems } = useMenu()
  const userId = localStorage.getItem("authId") 
  const token = localStorage.getItem("authToken"); 
  const navigate = useNavigate();

  // Fetch all Cart Menus
  const fetchcartItems = async () => {
    try {
      const response = await cartApi.getAllCartItems(userId, token)
      setcartItems(response.data);
    } catch (error) {
      console.error("Error Fetching Cart Menu:", error);
      throw error;
    }
  };

  // Add to Cart
  const addToCart = async (cartData) => {
    try {
      const response = await cartApi.addToCart(userId, cartData, token)
      setcartItems([...cartItems, response.data]); // Add the new Menu to the state
    } catch (error) {
      console.error("Error Adding Menu to Cart:", error);
      throw error;
    }
  };

  // Remove from cart
  const removeFromCart = async (cartId) => {
    try {
      await cartApi.removeFromCart(userId, cartId, token)
      setcartItems(cartItems.filter(item => item.menu_id !== cartId)); // Update state after removing
      navigate('/cart')
    } catch (error) {
      console.error("Error Removing Cart Menu:", error);
      throw error;
    }
  };

  const clearCart = () => {
    setcartItems([]); // Clears all items in the cart
  };

  useEffect(() => {
    if (userId && token) {
      fetchcartItems(); // Fetch Cart Menus when the component mounts
    }
  }, [userId, token]);

  useEffect(() => {
   // Ensure menuItems and cartItems are properly defined
   if (menuItems && Array.isArray(menuItems) && cartItems && Array.isArray(cartItems)) {
    // Fetch and match menu details with cart items
    const enrichedCartItems = cartItems.map(cartItem => {
      const menuItem = menuItems.find(menu => menu.menu_id === cartItems.menu_id);
      return {
        ...cartItem,
        ...menuItem,
      };
    });
    setCartDetails(enrichedCartItems);
  }
  }, [cartItems, menuItems]);

  return { cartItems, cartDetails, clearCart, addToCart, removeFromCart };
};

export default useCart;
