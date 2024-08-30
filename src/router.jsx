// React Router setup

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./componets/header";
import Footer  from "./componets/footer";
import HomePage from "./pages/home-page";
import RestaurantsPage from "./pages/restaurants-page";
import MenuPage from "./pages/menu-page";
import FavoritesPage from "./pages/favorites-page";
import LoginPage from "./pages/login-page";

function AllRouters() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //  Remember to write className instead of class
    return (
     <div>
        <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/menus" element={<MenuPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} />
        </Routes>
        <Footer />
      </Router>
     </div>
    
    )
  }
  
  export default AllRouters
  