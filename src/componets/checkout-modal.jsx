// Checkout Modal Component

import { Link } from "react-router-dom";

const CheckoutModal = ({ onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-800 bg-opacity-90">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-8 w-1/2 ">
          <div className="flex flex-col items-center">
            {/* Success Icon */}
            <div className="bg-green-100 rounded-full p-3">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Checkout Successful
            </h3>

            {/* Description */}
            <p className="text-gray-500 mt-2 text-center">
            Your taste adventure is officially set in motion! Our chefs are busy creating a mouthwatering masterpiece just for you. Sit tight, and get ready for a wave of deliciousness heading your way. The wait will be oh-so worth it!
            </p>

            {/* If you want to check order details and all you can add code from here like check the order Status or Transaction Details */}
            <Link
              to="/menus"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg mt-6"
              onClick={onClose}
            >
              Go back to Menus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
