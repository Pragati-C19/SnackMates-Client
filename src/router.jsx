// React Router setup

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./componets/header";
import Footer  from "./componets/footer";
import HomePage from "./pages/home-page";
import RestaurantsPage from "./pages/restaurants-page";
import RestaurantMenuPage from "./pages/restaurant-menu-page";
import MenuPage from "./pages/menu-page";
import FavoritesPage from "./pages/favorites-page";
import LoginPage from "./pages/login-page";

function AllRouters() {

    // Query for search bar
    const [searchQuery, setSearchQuery] = useState("");
  
    //  Remember to write className instead of class
    return (
     <div>
        <Router>
        <Header setSearchQuery={setSearchQuery}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/restaurants/:restaurantId" element={<RestaurantMenuPage />} />
          <Route path="/menus" element={<MenuPage searchQuery={searchQuery}/>} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
     </div>
    
    )
  }
  
  export default AllRouters
  