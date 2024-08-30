// Specific restaurant page
import { useParams } from "react-router-dom";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import useRestaurants from "../hooks/use-restaurants-list"
import useRestaurantMenu from "../hooks/use-restaurants-menu";
import useFavorites from "../hooks/use-favorites-data";

const restaurantsMenuPage = () => {

  const { restaurantId } = useParams(); // Get restaurant ID from the route parameter
  const restaurantsId = parseInt(restaurantId); // Convert the ID to a number
  
  const { menuItems } = useRestaurantMenu(restaurantsId)
  const { restaurants } = useRestaurants(restaurantsId)
  const { addToFavorites } = useFavorites(restaurantsId)

  // Find the specific restaurant by ID
  const restaurant = restaurants.find(r => r.restaurant_id == restaurantsId);
  console.log("restaurant-menu-page restaurants: ", { restaurantId } )

  const handleAddToFavorites = async (id) => {
    const favoriteData = { menu_id: id };
    console.log("handleAddToFavorites : favriteData ",favoriteData)
    await addToFavorites(favoriteData);
  };

  return(
    <section className="text-gray-800">
      <div className="flex items-center justify-center gap-40 bg-gradient-to-b from-purple-200 to-pink-200 mb-10">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">{restaurant?.restaurant_name || 'Restaurant Name'}</h1>
          <p className="text-lg mt-2"> {restaurant?.restaurant_short_description || 'Short Description'}</p>
        </div>
        <div className="ml-6">
          <img src="/src/imgs/restaurant_silder.png" alt="Food Image" className="md:w-full md:h-60 object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 px-16">
        {menuItems.map((items) => (
          <div key={items.menu_id} className="bg-gray-200 shadow-lg rounded-lg flex flex-col md:flex-row">
            <img
              src={items.menu_img_url}
              alt={items.menu_name}
              className="rounded-lg"
              style={{width: 300, height: 200}}
            />
            <div className="flex flex-col p-2">
              <div className="mb-4">
                <h2 className="text-2xl font-serif text-center text-black mb-4">{items.menu_name}</h2>
                <p className="text-gray-800">{items.menu_description}</p>
              </div>
              <div className="flex justify-between items-center px-5    ">
                <p className="text-gray-500 font-bold">Menu Type : {items.menu_type}</p>
                <p className="text-green-500 font-bold">Price : {items.menu_price}</p>
              </div>
              <div className="flex justify-between mt-4 px-4">
                <button
                  onClick={() => handleAddToCart(items.menu_id)}
                  className="bg-blue-300 text-black px-4 py-1 rounded flex items-center">
                  <FaCartPlus className="mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => handleAddToFavorites(items.menu_id)}
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
