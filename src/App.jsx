import './app.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./componets/header";
import Footer  from "./componets/footer";
import HomePage from "./pages/home-page";
import RestaurantsPage from "./pages/restaurants-page";
import MenuPage from "./pages/menu-page";
import FavoritesPage from "./pages/favorites-page";
import LoginPage from "./pages/login-page";

function App() {

  //  Remember to write className instead of class
  return (
   <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/menus" element={<MenuPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
   </div>
  
  )
}

export default App
