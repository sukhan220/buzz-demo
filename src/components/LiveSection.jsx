// src/components/LiveSection.jsx
import React from "react";
import an from "../assets/annoucement.png"; // Adjust the path as necessary

const LiveSection = () => {
  return (
    // src/components/LiveSection.jsx
    <div className="w-full bg-brown-800 text-white py-2 px-4 z-10 flex justify-between items-center">
      {/* Left side with icon */}
      <div className="flex items-center space-x-2">
        <img
          src={an}
          alt="announcement"
          className="w-6 h-6"
        />

      </div>

      {/* Right side with message */}
      <div className="text-sm text-left overflow-hidden whitespace-nowrap w-full">
        <div className="animate-marquee inline-block">
          <span>
            Dear customers, please use the given link to access our website{" "}
            <a
              href="http://jb159263487.com"
              className="underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              jb159263487.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveSection;
