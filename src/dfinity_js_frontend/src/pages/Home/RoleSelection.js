import React from "react";
import { Link } from "react-router-dom";

const RoleSelection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray1-900">
      {/* Container for both sections */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto p-8 gap-8 lg:gap-16">

        {/* Main Content Area */}
        <div className="flex-1 bg-gray1-800 text-shades-white p-8 rounded-3xl shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-center text-amber-500">
            Select Your Role
          </h1>
          <p className="text-center text-gray-400 mb-12 leading-relaxed">
            Whether you own properties or want to invest in real estate, select your role to get started on the Property Ownership Tokenization Platform.
          </p>
          <div className="flex flex-col space-y-8">
            {/* Property Owner Role */}
            <Link to="/property-owner?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai" className="text-center no-underline">
              <div className="bg-amber-600 hover:bg-amber-700 text-gray1-900 py-6 px-8 rounded-xl shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                <h2 className="text-3xl font-semibold mb-3">Property Owner</h2>
                <p className="text-base">
                  Manage your properties, tokenize assets, and offer investments to potential investors.
                </p>
              </div>
            </Link>

            {/* Investor Role */}
            <Link to="/investor?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai" className="text-center no-underline">
              <div className="bg-amber-500 hover:bg-amber-600 text-gray1-900 py-6 px-8 rounded-xl shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                <h2 className="text-3xl font-semibold mb-3">Investor</h2>
                <p className="text-base">
                  Explore tokenized real estate properties, invest, and earn dividends from your investments.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Learn More Section */}
        <div className="flex-1 bg-gray1-800 text-shades-white p-8 flex flex-col justify-center rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-amber-500">
            Learn More
          </h2>
          <p className="text-gray-400 leading-relaxed text-center">
            Our platform provides a seamless way to get involved in real estate through tokenization. Learn about our features, benefits, and how you can start investing or managing properties with ease. Discover the future of property ownership and investment with us.
          </p>
        </div>

      </div>
    </div>
  );
};

export default RoleSelection;
