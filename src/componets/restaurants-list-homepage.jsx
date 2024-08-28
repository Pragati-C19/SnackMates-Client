//restaurants list for Homepage

import React from 'react';

// Sample data array
const restaurants = [
  {
    id: 1,
    name: 'GreeNox - Healthy',
    rating: '4.9 ★',
    description: 'Great selection of healthy options',
    imageSrc: 'https://i.pinimg.com/564x/e4/2d/c7/e42dc7db4e311c962b310c0283ae5dfa.jpg'
  },
  {
    id: 2,
    name: 'The Good Bowl',
    rating: '4.8 ★',
    description: 'Delicious bowls for any craving',
    imageSrc: 'https://i.pinimg.com/564x/eb/e6/8e/ebe68ea785193115f45cb345d28f75c0.jpg'
  },
  {
    id: 3,
    name: 'Tasty Bites',
    rating: '4.7 ★',
    description: 'Satisfy your hunger with tasty bites',
    imageSrc: 'https://i.pinimg.com/564x/10/df/8e/10df8e38ad52aad0cddbbc57ba15accb.jpg'
  },
  {
    id: 4,
    name: 'Fresh Eats',
    rating: '4.6 ★',
    description: 'Healthy and fresh meals every day',
    imageSrc: 'https://i.pinimg.com/564x/cb/49/5a/cb495af647d027fc672a0276a1023d2a.jpg '
  },
  {
    id: 5,
    name: 'Flavor Fusion',
    rating: '4.9 ★',
    description: 'Unique flavors from around the world',
    imageSrc: 'https://i.pinimg.com/564x/11/46/5d/11465def2a6c4aa5664fa5c9ce0cf78e.jpg'
  },
  {
    id: 6,
    name: 'Quick Bites',
    rating: '4.5 ★',
    description: 'Quick and delicious meals',
    imageSrc: 'https://i.pinimg.com/564x/48/58/f7/4858f72c9e69f6d2c01a293ba03cb349.jpg'
  }
];

function RestaurantCards() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold text-purple-800 mb-4">
        Order food online from
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-20">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-green-100 shadow-lg rounded-lg">
            <img src={restaurant.imageSrc} alt={restaurant.name} className="rounded-lg mb-2" style={{ width: '400px', height: '250px' }} />
            <div className="flex flex-col flex-grow bg-green-100">
              <h2 className="text-3xl font-serif text-purple-600 mb-1">{restaurant.name}</h2>
              <p className="text-gray-800 mb-4">{restaurant.description}</p>
              <div className="flex justify-between mb-2 px-16">
                <p className="text-green-500 font-bold">{restaurant.rating}</p>
                <a href="#" className="font-semibold leading-6 text-blue-800 hover:text-blue-500">
              View More
            </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RestaurantCards;
