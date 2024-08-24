import './app.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./componets/header";
import Footer  from "./componets/footer";
import HomePage from "./pages/home-page";
import RestaurantsPage from "./pages/restaurants-page";

function App() {

  //  Remember to write className instead of class
  return (
   <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
      </Routes>
      <Footer />
    </Router>
   </div>
  
  )
}

export default App
