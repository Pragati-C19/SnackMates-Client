// Specific restaurant page
import { useParams } from "react-router-dom";
import useMenu from "../hooks/use-menu-data";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import useRestaurants from "../hooks/use-restaurants-list"

const restaurantsMenuPage = () => {

  const { id } = useParams(); // Get restaurant ID from the route parameter
  const restaurantId = parseInt(id); // Convert the ID to a number
  const { menuItems } = useMenu(restaurantId);
  const { restaurants } = useRestaurants(restaurantId)

  // Find the specific restaurant by ID
  const restaurant = restaurants.find(r => r.restaurant_id === restaurantId);
  console.log("restaurant-menu-page restaurants: ", {restaurants} )

  return(
    <section className="bg-gradient-to-b from-purple-200 to-pink-200 text-gray-800 py-6">
      <div className="flex items-center justify-center gap-36">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">{restaurant?.restaurant_name || 'Restaurant Name'}</h1>
          <p className="text-lg mt-2"> {restaurant?.restaurant_short_description || 'Short Description'}</p>
        </div>
        <div className="ml-6">
          <img src="/src/imgs/restaurant_silder.png" alt="Food Image" className="w-full h-60 object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 px-4">
        {menuItems.map((items) => (
          <div key={items.menu_id} className="bg-gray-200 shadow-lg rounded-lg flex flex-col md:flex-row">
            <img
              src={items.menu_img_url}
              alt={items.menu_name}
              className="rounded-t-lg md:w-80 h-full object-cover"
            />
            <div className="flex flex-col justify-between p-4">
              <div className="mb-4">
                <h2 className="text-2xl font-serif text-black mb-4">{items.menu_name}</h2>
                <p className="text-gray-800">{items.menu_description}</p>
              </div>
              <div className="flex justify-between items-center px-32">
                <p className="text-green-500 font-bold">{items.menu_price}</p>
                <p className="text-gray-500 font-bold">{items.menu_type}</p>
              </div>
              <div className="flex justify-between mt-auto px-4">
                <button
                  onClick={() => handleAddToCart(item.id)}
                  className="bg-blue-300 text-black px-4 py-2 rounded flex items-center">
                  <FaCartPlus className="mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => handleAddToFavorites(item.menu_id)}
                  className="bg-red-500 text-white px-4 rounded flex items-center">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


  );
};

export default restaurantsMenuPage
