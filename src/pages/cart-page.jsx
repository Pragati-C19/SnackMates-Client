// // Cart Page 

// import React from 'react';
// import useCart from '../hooks/use-cart';
// import useMenu from '../hooks/use-menu-data';

// const CartPage = () => {
// //   const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
//   const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();
//   const { menuItems } = useMenu();

//   const handleRemovecartItems = async (id) => {
//     console.log("removecartItems ID : ", id)
//     await removeFromCart(id);
//   };

//   const calculateSubtotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const calculateTotal = () => {
//     const subtotal = calculateSubtotal();
//     const shipping = 5.00;
//     const tax = 8.00;
//     return subtotal + shipping + tax;
//   };

// //   const handleCheckout = () => {
// //     // Implement your checkout logic here (e.g., process payment, update order status)
// //     setIsCheckoutModalOpen(true);
// //   };

// //   const handleCloseModal = () => {
// //     setIsCheckoutModalOpen(false);
// //   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <h2 className="text-3xl font-bold text-purple-800 mb-7">Food Cart</h2>
//       <div className="space-y-4">
//         {cartItems.map((item) => (
//           <li key={item.cart_id} className="flex items-center">
//             <img src={item.menu_img_url} alt={item.menu_name} className="w-16 h-16 object-cover rounded-md mr-4" />
//             <div>
//               <p className="text-lg font-semibold">{item.name}</p>
//               <p className="text-gray-500">{item.color}</p>
//               <p className="text-gray-500">{item.size}</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <button className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0 1 18 0z" />
//                 </svg>
//               </button>
//               <input type="number" min="1" className="w-8 border border-gray-300 rounded-md px-2 py-1 text-center" value={item.quantity} />
//               <button className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0 2.25 2.25-2.25 2.25m-2.25-2.25 2.25-2.25" />
//                 </svg>
//               </button>
//             </div>
//             <p className="text-gray-700 ml-4">${item.price}</p>
//             <button className="bg-red-500 text-white px-2 py-1 rounded-md">Remove</button>
//           </li>
//         ))}
//       </div>
//       {/* <div className="border-t border-gray-200 mt-4 p-4">
//         <p className="text-gray-700">Subtotal: ${calculateSubtotal().toFixed(2)}</p>
//         <p className="text-gray-700">Shipping: $5.00</p>
//         <p className="text-gray-700">Tax: $8.00</p>
//         <p className="text-lg font-bold text-gray-900">Order total: ${calculateTotal().toFixed(2)}</p>
//         <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={handleCheckout}>
//           Checkout
//         </button>
//         <p className="text-gray-500 mt-2">or <a href="#" className="text-blue-500 hover:text-blue-700">Continue Shopping</a></p>
//       </div> */}
//     </div>
//   );
// };

// export default CartPage;


import React from 'react';
import useCart from '../hooks/use-cart';

const CartPage = () => {
  const { cartItems, cartDetails, removeFromCart } = useCart();

  const handleRemoveCartItem = async (cartId) => {
    try {
      await removeFromCart(cartId);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const calculateSubtotal = () => {
    return cartDetails.reduce((total, item) => total + item.menu_price, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 5.00;
    const tax = 8.00;
    return subtotal + shipping + tax;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
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
        <p className="text-gray-700">Subtotal: ${calculateSubtotal()}</p>
        <p className="text-gray-700">Shipping: $5.00</p>
        <p className="text-gray-700">Tax: $8.00</p>
        <p className="text-lg font-bold text-gray-900">Order total: ${calculateTotal()}</p>
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Checkout
        </button>
        <p className="text-gray-500 mt-2">or <a href="#" className="text-blue-500 hover:text-blue-700">Continue Shopping</a></p>
      </div>
    </div>
  );
};

export default CartPage;
