// All restaurants listing page

import React from 'react';

// Sample data array
const restaurants = [
  {
    id: 1,
    name: 'GreeNox - Healthy',
    rating: '4.9 ★',
    description: 'At GreeNox, a fresh take on healthy eating with a menu featuring crisp salads, avocado sandwiches, and nutrient-packed bowls. Dive into our delicious offerings like the Garden Salad, Quinoa Bowl, and Chickpea Wrap, all crafted to nourish your body and satisfy your taste buds. Visit us at 456 Healthy Lane and enjoy a meal that’s as good for you as it is tasty!',
    imageSrc: 'https://i.pinimg.com/564x/e4/2d/c7/e42dc7db4e311c962b310c0283ae5dfa.jpg'
  },
  {
    id: 2,
    name: 'The Good Bowl',
    rating: '4.8 ★',
    description: 'At The Good Bowl, our menu is all about comforting and delicious bowl-based dishes. From savory ramen and hearty noodle soups to flavorful curry bowls and rice dishes, each bowl is crafted to deliver a satisfying and wholesome meal. Enjoy a variety of global flavors and hearty ingredients, all served in a bowl to warm your soul and satisfy your cravings.',
    imageSrc: 'https://i.pinimg.com/564x/eb/e6/8e/ebe68ea785193115f45cb345d28f75c0.jpg'
  },
  {
    id: 3,
    name: 'Tasty Bites',
    rating: '4.7 ★',
    description: 'At Moongliscious, experience the rich flavors of South India with our authentic dishes. Delight in aromatic dosas, fluffy idlis, and savory sambar, or savor our flavorful biryanis and spicy curries. Each dish is crafted with traditional spices and fresh ingredients, bringing you a taste of South Indian culinary heritage that’s both comforting and delicious.',
    imageSrc: 'https://i.pinimg.com/564x/10/df/8e/10df8e38ad52aad0cddbbc57ba15accb.jpg'
  },
  {
    id: 4,
    name: 'Fresh Eats',
    rating: '4.6 ★',
    description: 'The Belgian Waffle offer a delectable range of waffles that are sure to delight. Indulge in our crispy, golden waffles topped with fresh berries, whipped cream, and rich chocolate sauce. From classic favorites to inventive creations, our menu offers something for every taste, ensuring a delicious experience with every bite.',
    imageSrc: 'https://i.pinimg.com/564x/cb/49/5a/cb495af647d027fc672a0276a1023d2a.jpg '
  },
  {
    id: 5,
    name: 'Flavor Fusion',
    rating: '4.9 ★',
    description: 'Purely Smooth offer a refreshing selection of smoothies and cold drinks perfect for any time of the day. Enjoy our creamy fruit smoothies made with fresh, ripe ingredients, or cool down with our chilled iced teas and invigorating cold-pressed juices. Each drink is crafted to be both delicious and revitalizing, providing a perfect complement to our diverse menu.',
    imageSrc: 'https://i.pinimg.com/564x/11/46/5d/11465def2a6c4aa5664fa5c9ce0cf78e.jpg'
  },
  {
    id: 6,
    name: 'Quick Bites',
    rating: '4.5 ★',
    description: 'Barbeque Nation offer barbecue menu features a delectable mix of options for everyone. Enjoy our tender, slow-cooked ribs, juicy pulled pork, and smoky brisket, alongside delicious vegetarian choices like BBQ-glazed portobello mushrooms and spicy grilled cauliflower. Whether you’re a meat lover or a vegetarian, our mouthwatering barbecue dishes promise to satisfy your cravings and deliver rich, smoky flavors in every bite.',
    imageSrc: 'https://i.pinimg.com/564x/48/58/f7/4858f72c9e69f6d2c01a293ba03cb349.jpg'
  }
];

function RestaurantPage() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-4xl font-bold text-purple-800 mb-9">
        Restaurants List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-12 px-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-gray-200 shadow-lg rounded-lg flex flex-col md:flex-row">
            <img
              src={restaurant.imageSrc}
              alt={restaurant.name}
              className="rounded-lg md:w-1/2 h-48 object-cover"
            />
            <div className="flex flex-col justify-between p-4">
              <div className="mb-4">
                <h2 className="text-2xl font-serif text-black mb-1">{restaurant.name}</h2>
                <p className="text-gray-800 mb-2">{restaurant.description}</p>
              </div>
              <div className="flex justify-between items-center px-32">
                <p className="text-green-500 font-bold">{restaurant.rating}</p>
                <a href="#" className="font-semibold text-blue-800 hover:text-blue-500">
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

export default RestaurantPage;
