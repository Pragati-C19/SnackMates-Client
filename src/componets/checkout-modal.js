// Checkout Modal Component

import { Link } from "react-router-dom";

const CheckoutModal = ({ onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold">Checkout Successful</h3>
          <p className="text-gray-500">
            Your order has been placed successfully.
          </p>
          {/* If you want to check order details and all you can add code from here like check the order Status or Transaction Details */}
          <Link to="/menus"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={onClose}>
            Go back to Menus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
