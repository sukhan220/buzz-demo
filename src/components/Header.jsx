


// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import wp from '../assets/whatsapp.png';
import email from '../assets/mail.png';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';

const items = [
  { name: "I-Sports", image: f1 },
  { name: "BTi", image: f2 },
  { name: "CMD Sports", image: f3 },
  { name: "Exchange", image: f4 }
];

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString(); // Get current time
      setCurrentTime(time);
    };

    const interval = setInterval(updateTime, 1000); // Update time every second
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <header className="sticky top-0 bg-black text-white w-full z-20">

      {/* Top Bar for Time and Social Media Links */}
      <div className="bg-gray-800 text-white py-1 px-4 flex justify-between items-center">
        <div className="text-sm">
          <span>GMT+6 | </span>
          <span>{currentTime}</span> {/* Dynamically Displaying Time */}
        </div>
        <div className="flex space-x-4">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <img
              src={wp}
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
            <img
              src={email}
              alt="Email"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>

      <div className="flex justify-between items-center py-4 max-w-screen-xl mx-auto w-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600">
        {/* Left Section (Logo) */}
        <div className="flex items-center space-x-10">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Right Section (Login/Sign Up) */}
        <div className="flex space-x-4">
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
          <Link to="/signup">
            <button className="bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-400">Sign Up</button>
          </Link>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="max-w-screen-xl mx-auto w-full bg-black">
        <nav className="flex w-full">
          {/* Sports Dropdown */}
          <div
            className="relative flex-1 text-center border-r w-96"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/sports" className="absolute menu-item">
              Sports
            </Link>


            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-0 bg-gray-900 text-white shadow-lg rounded-md z-10">
                <div className="flex">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className="group w-80 h-56 flex flex-col justify-between items-center p-4 space-y-3 hover:bg-gray-700 cursor-pointer transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Background image container with scaling effect */}
                      <div
                        className="absolute inset-0 group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          transformOrigin: 'center', // Scaling from the center
                        }}
                      ></div>

                      <span className="text-lg font-medium z-10">{item.name}</span>
                      <button className="bg-transparent border-2 border-orange-500 text-white py-2 px-6 rounded-md group-hover:bg-orange-500 group-hover:border-transparent transition-all duration-300 z-10">
                        Play Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}



          </div>

          {/* Other Menu Items */}
          <Link to="/casino" className="menu-item">
            Casino
          </Link>
          <Link to="/slot" className="menu-item">
            Slot
          </Link>
          <Link to="/table" className="menu-item">
            Table
          </Link>
          <Link to="/fishing" className="menu-item">
            Fishing
          </Link>
          <Link to="/arcade" className="menu-item">
            Arcade
          </Link>
          <Link to="/lottery" className="menu-item">
            Lottery
          </Link>
          <Link to="/promotions" className="menu-item">
            Promotions
          </Link>
          <Link to="/vip" className="menu-item">
            VIP
          </Link>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/150x50.png?text=JeetBuzz"
            alt="Logo"
            className="h-8"
          />
        </div>

        <div className="space-y-2">
          <div className="w-8 h-1 bg-white"></div>
          <div className="w-8 h-1 bg-white"></div>
          <div className="w-8 h-1 bg-white"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
