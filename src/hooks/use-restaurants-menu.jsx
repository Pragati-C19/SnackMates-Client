import { useState, useEffect } from 'react';
import restaurantsApi from '../api-calls/restaurants-api';

const useRestaurantMenu = (restaurantId = null) => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!restaurantId) return;

        const fetchRestaurantMenu = async () => {
            try {
                const response = await restaurantsApi.getRestaurantsMenu(restaurantId);
                setMenuItems(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurantMenu();
    }, [restaurantId]);

    return { menuItems, loading, error };
};

export default useRestaurantMenu;
