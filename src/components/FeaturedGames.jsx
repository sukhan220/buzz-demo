// src/components/FeaturedGames.jsx
import React from "react";

const FeaturedGames = () => {
  return (
    <section className="py-8 bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">Featured Games</h2>
          <button className="text-orange-500 font-semibold">See All</button>
        </div>

        {/* Game Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Game Card */}
          <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-md shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Chennai_Super_Kings_logo.png"
                alt="Chennai Super Kings"
                className="w-16 h-16"
              />
              <span className="text-lg font-semibold">20:00</span>
            </div>
            <h3 className="text-xl font-bold">Chennai Super Kings vs Punjab Kings</h3>
            <p className="text-md mt-2">Indian Premier League</p>
            <span className="absolute bottom-4 right-4 text-sm">
              30 Apr 2025 (Wed)
            </span>
          </div>

          {/* Second Game Card */}
          <div className="relative bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-md shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Lahore_Qalandars_logo.png"
                alt="Lahore Qalandars"
                className="w-16 h-16"
              />
              <span className="text-lg font-semibold">21:00</span>
            </div>
            <h3 className="text-xl font-bold">Lahore Qalandars vs Islamabad United</h3>
            <p className="text-md mt-2">Pakistan Super League</p>
            <span className="absolute bottom-4 right-4 text-sm">
              30 Apr 2025 (Wed)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
