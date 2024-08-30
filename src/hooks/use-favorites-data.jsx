// Fetching data of Favorites 

import { useState, useEffect } from "react";
import favoritesApi from "../api-calls/favorites-api";
import { useNavigate } from "react-router-dom";

const useFavorites = () => {

  const [favorites, setFavorites] = useState([]);
  const userId = localStorage.getItem("authId") //TODO: Replace with actual user ID
  const token = localStorage.getItem("authToken"); //TODO: Replace with actual auth token
  const navigate = useNavigate();

  // Fetch all favorites
  const fetchFavorites = async () => {
    try {
      const response = await favoritesApi.getAllFavorites(userId, token)
      setFavorites(response.data);
    } catch (error) {
      console.error("Error Fetching Favorites:", error);
      throw error;
    }
  };

  // Add to favorites
  const addToFavorites = async (favoriteData) => {
    try {
      const response = await favoritesApi.addToFavorites(userId, favoriteData, token)
      setFavorites([...favorites, response.data]); // Add the new favorite to the state
    } catch (error) {
      console.error("Error Adding Favorites:", error);
      throw error;
    }
  };

  // Remove from favorites
  const removeFavorites = async (favoriteId) => {
    try {
      await favoritesApi.removeFavorites(userId, favoriteId, token)
      setFavorites(favorites.filter(fav => fav.menu_id !== favoriteId)); // Update state after removing
      navigate('/menus')
    } catch (error) {
      console.error("Error Removing Favorites:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (userId && token) {
      fetchFavorites(); // Fetch favorites when the component mounts
    }
  }, [userId, token]);

  return { favorites, addToFavorites, removeFavorites };
};

export default useFavorites;
