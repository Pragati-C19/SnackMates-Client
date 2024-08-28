// Home page

import React from 'react';
import Banner from '../componets/banner-homepage';
import HorizontalScrollMenu from '../componets/scroll-bar';
import RestaurantCards from '../componets/restaurants-list-homepage';
import '../styles/homepage.css'

const HomePage = () => {
    return (
        <div className='bg-custom-background'>   
          <Banner />
          <HorizontalScrollMenu />
          <RestaurantCards />
        </div>
      );
};
  
export default HomePage;

