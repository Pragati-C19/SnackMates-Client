// Menu Types Scroll Bar on Homepage

import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "../styles/scroll-bar.css";
import Img1 from "../imgs/food-menu/pasta.jpg";
import Img2 from "../imgs/food-menu/buger.jpg";
import Img3 from "../imgs/food-menu/pizza.jpg";
import Img4 from "../imgs/food-menu/chicken.jpg";
import Img5 from "../imgs/food-menu/ramen.jpg";
import Img6 from "../imgs/food-menu/drinks.jpg";
import Img7 from "../imgs/food-menu/momos.jpg";
import Img8 from "../imgs/food-menu/dessert.jpg";
import Img9 from "../imgs/food-menu/thali.jpg";
import Img10 from "../imgs/food-menu/south-food.jpg";
import Img11 from "../imgs/food-menu/salad.jpg";

// Menu types
const menuTypes = [
  { id: 1, name: "Pasta", imgSrc: Img1 },
  { id: 2, name: "Burger", imgSrc: Img2 },
  { id: 3, name: "Pizza", imgSrc: Img3 },
  { id: 4, name: "Chicken", imgSrc: Img4 },
  { id: 5, name: "Ramen", imgSrc: Img5 },
  { id: 6, name: "Drinks", imgSrc: Img6 },
  { id: 7, name: "Momos", imgSrc: Img7 },
  { id: 8, name: "Dessert", imgSrc: Img8 },
  { id: 9, name: "Thali", imgSrc: Img9 },
  { id: 10, name: "South Food", imgSrc: Img10 },
  { id: 11, name: "Salad", imgSrc: Img11 },
];

function HorizontalScrollMenu() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = (id) => {
    navigate(`/menus`); //TODO: This needs too add Navigate to menu page with the item by Type
  };

  return (
    <section className="p-8 text-center bg-custom-green">
      <h2 className="text-3xl font-bold text-purple-800 mb-4">
        Inspiration for your first order
      </h2>
      <div className="relative overflow-hidden px-32">
        <div className="flex overflow-x-auto no-scrollbar">
          <div className="flex space-x-20 display-cards">
            {menuTypes.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-50 h-50 rounded-lg flex flex-col items-center justify-center mx-4" onClick={() => handleClick(item.id)}>
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="w-32 h-32 rounded-full mt-2 mb-4"
                />
                <p className="text-gray-800 text-lg font-serif">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HorizontalScrollMenu;
