import React from "react";
import { Link } from "react-router-dom";

const RoleSelection = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjM1MzQyOTU4&ixlib=rb-1.2.1&q=80&w=1080')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800 no-underline">
          Select Your Role
        </h1>
        <p className="text-center text-gray-600 mb-6 no-underline">
          Whether you own properties or want to invest in real estate, select your role to get started on the Property Ownership Tokenization Platform.
        </p>
        <div className="flex flex-col space-y-6">
          {/* Property Owner Role */}
          <Link to="/property-owner" className="text-center no-underline">
            <div className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out cursor-pointer">
              <h2 className="text-2xl font-bold mb-2 no-underline">Property Owner</h2>
              <p className="text-sm no-underline">
                Manage your properties, tokenize assets, and offer investments to potential investors.
              </p>
            </div>
          </Link>

          {/* Investor Role */}
          <Link to="/investor" className="text-center no-underline">
            <div className="bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out cursor-pointer">
              <h2 className="text-2xl font-bold mb-2 no-underline">Investor</h2>
              <p className="text-sm no-underline">
                Explore tokenized real estate properties, invest, and earn dividends from your investments.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
