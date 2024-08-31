// Cart Page 

import React, {useState} from 'react';
import useCart from '../hooks/use-cart';
import CheckoutModal from '../componets/checkout-modal';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const CartPage = () => {

  const { cartDetails, removeFromCart, clearAllCartItems} = useCart();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

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

  const handleCheckout = () => { 
    clearAllCartItems()
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="bg-gradient-to-b from-white to-pink-200 p-4 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-bold text-purple-800 mb-7">Food Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {cartDetails.map((item) => (
          <div key={item.cart_id} className="flex items-center bg-gradient-to-b from-gray-200 to-gray-400 shadow-lg rounded-lg">
            <img src={item.menu_img_url} alt={item.menu_name} className="w-40 h-40 object-cover rounded-md mr-4" />
            <div className='px-2'>
              <p className="text-lg font-semibold">{item.menu_name}</p>
              <p className="text-gray-800">{item.menu_description}</p>
            </div>
            <div className="flex flex-col items-start px-6">
                <p className="text-green-800 font-bold mb-4">${item.menu_price}</p>
                <button
                  className="bg-red-700 text-white px-2 py-1 rounded-md flex items-center"
                  onClick={() => handleRemoveCartItem(item.cart_id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4">
        <hr />
      {cartDetails.length > 0 ? (
        <div className="mt-4 p-4">
          <p className="text-black font-bold">Subtotal: ${calculateSubtotal()}</p>
          <p className="text-black">Shipping: $5.00</p>
          <p className="text-black">Tax: $8.00</p>
          <p className="text-lg font-bold text-gray-900">Order total: ${calculateTotal()}</p>
          <button
            className="w-1/2 rounded-lg mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2"
            onClick={handleCheckout}
          >
            Checkout
          </button>
          <p className="text-gray-500 mt-2">or Cravings still calling? <Link to="/menus" className="text-black hover:text-blue-700">Continue Ordering</Link></p>
        </div>
      ) : (
        <p className="text-xl text-gray-700">You have no items in Cart.</p>
      )}
      </div>
      {isCheckoutModalOpen && <CheckoutModal onClose={()=>setIsCheckoutModalOpen(false)} />}
    </div>
  );
};

export default CartPage;
