// src/components/SeeMoreSection.jsx
import React, { useState } from 'react';

const SeeMoreSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="bg-slate-700 text-white py-12 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-6">
          Buzz-Demo Bangladesh - Your Ultimate Destination for Online Gaming and Betting
        </h2>

        {/* Description */}
        <p className="text-lg mb-4">
          Welcome to Buzz-Demo Bangladesh, where the thrill of online gaming meets the excitement of sports betting, all under one roof. Whether you’re a seasoned gamer or new to the world of online gambling, Buzz-Demo offers a dynamic platform that caters to all your gaming and betting needs. With a wide array of games from top providers and an innovative betting exchange, we are here to deliver an unparalleled experience to players across Bangladesh.
        </p>

        {/* Show More Text */}
        {isExpanded && (
          <p className="text-lg mb-6">
            A World of Gaming Options At Buzz-Demo, we pride ourselves on offering a diverse selection of games that appeal to every type of player. Our platform features an extensive lineup of games from industry-leading providers, including slots, table games, live dealer experiences, sports betting, and more. No matter your preferences, JeetBuzz is your one-stop destination for top-tier gaming and betting action.
          </p>
        )}

        {/* Show More / Less Button */}
        <button
          onClick={toggleExpansion}
          className="bg-yellow-500 text-black py-2 px-6 rounded-md hover:bg-yellow-400 transition-all duration-300"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
};

export default SeeMoreSection;
