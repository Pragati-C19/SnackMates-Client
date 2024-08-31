// Cart Page 


// const CartPage = () => {
//   const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

//   const handleCheckout = () => {
//     // Implement your checkout logic here (e.g., process payment, update order status)
//     setIsCheckoutModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsCheckoutModalOpen(false);
//   };


//       {/* 
//         <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={handleCheckout}>
//           Checkout
//         </button>
//         <p className="text-gray-500 mt-2">or <a href="#" className="text-blue-500 hover:text-blue-700">Continue Shopping</a></p>
//       </div> */}




import React from 'react';
import useCart from '../hooks/use-cart';

const CartPage = () => {
  const { cartDetails, removeFromCart } = useCart();

  const handleRemoveCartItem = async (cartId) => {
    try {
      await removeFromCart(cartId);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const calculateSubtotal = () => {
    const subtotal = cartDetails.reduce((total, item) => {
        const price = Number(item.menu_price) || 0; // Convert to number, default to 0 if undefined
        return total + price;
      }, 0);

    const roundupSubtotal= Math.round(subtotal * 100) / 100;
    console.log("subtotal",roundupSubtotal)
    return roundupSubtotal
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 5.00;
    const tax = 8.00;
    const total = Math.round((subtotal + shipping + tax) * 100)/100;
    return total
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-bold text-purple-800 mb-7">Food Cart</h2>
      <ul className="space-y-4">
        {cartDetails.map((item) => (
          <li key={item.cart_id} className="flex items-center">
            <img src={item.menu_img_url} alt={item.menu_name} className="w-16 h-16 object-cover rounded-md mr-4" />
            <div>
              <p className="text-lg font-semibold">{item.menu_name}</p>
              <p className="text-gray-500">{item.menu_description}</p>
            </div>
            <p className="text-gray-700 ml-4">${item.price}</p>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-md"
              onClick={() => handleRemoveCartItem(item.cart_id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="border-t border-gray-200 mt-4 p-4">
      {cartDetails.length > 0 ? (
        <div className="border-t border-gray-200 mt-4 p-4">
          <p className="text-gray-700">Subtotal: ${calculateSubtotal()}</p>
          <p className="text-gray-700">Shipping: $5.00</p>
          <p className="text-gray-700">Tax: $8.00</p>
          <p className="text-lg font-bold text-gray-900">Order total: ${calculateTotal()}</p>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Checkout
          </button>
          <p className="text-gray-500 mt-2">or <a href="#" className="text-blue-500 hover:text-blue-700">Continue Shopping</a></p>
        </div>
      ) : (
        <p className="text-xl text-gray-700">You have no favorite items.</p>
      )}
      </div>
    </div>
  );
};

export default CartPage;
