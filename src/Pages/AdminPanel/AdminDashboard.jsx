// src/pages/AdminPanel/AdminDashboard.jsx
import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";

const AdminDashboard = () => {
  return (
    <div className="px-4 py-8 w-full">
      {/* Search Bar */}
      <div className="flex justify-between items-center bg-gray-300 p-3 rounded-xl mb-5">
        <div className="flex items-center space-x-3 w-full">
          <FaSearch className="text-blue-500" />
          <input
            type="text"
            placeholder="Search Everything"
            className="bg-transparent w-full focus:outline-none text-white"
          />
        </div>
      </div>

      {/* Featured Game */}
      <div className="bg-gray-300 rounded-xl p-5 mb-5 relative overflow-hidden">
        <img
          src="/featured-game.jpg"
          alt="Featured Game"
          className="w-full h-48 object-cover rounded-xl"
        />
        <div className="absolute bottom-5 left-5">
          <h2 className="text-xl font-bold">
            Infinite Warfare - Steam Key (Global)
          </h2>
          <p className="text-sm text-gray-400">Call of Duty</p>
          <button className="mt-3 bg-orange-500 px-4 py-2 rounded-lg text-white">
            Purchase Now
          </button>
        </div>
      </div>

      {/* Exclusive Offers */}
      <section>
        <h3 className="text-lg font-bold mb-3">Exclusive Offers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {["game1.jpg", "game2.jpg", "game3.jpg", "game4.jpg"].map(
            (game, index) => (
              <div
                key={index}
                className="bg-gray-300 p-3 rounded-xl relative overflow-hidden"
              >
                <img
                  src={`/${game}`}
                  alt="Game"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="mt-2">
                  <h4 className="text-sm font-semibold">Game Title</h4>
                  <p className="text-sm text-gray-400">$120.00</p>
                  <button className="mt-2 bg-orange-500 px-3 py-1 rounded-lg text-white flex items-center">
                    <BsPlayFill className="mr-1" /> Play Now
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div >
  );
};

export default AdminDashboard;
