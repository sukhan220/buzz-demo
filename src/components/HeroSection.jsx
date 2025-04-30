


// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import LiveSection from "./LiveSection"; // Import LiveSection

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dynamic slides array
  const slides = [
    {
      title: "Welcome to Our Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-blue-500", // Blue background for first slide
    },
    {
      title: "Explore New Opportunities",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      bgColor: "bg-green-500", // Green background for second slide
    },
    {
      title: "Join Us Today",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
      bgColor: "bg-red-500", // Red background for third slide
    },
    {
      title: "Stay Updated",
      description: "Stay ahead of the curve with the latest updates and trends.",
      bgColor: "bg-purple-500", // Purple background for fourth slide
    },
    {
      title: "About Us",
      description: "Stay ahead of the curve with the latest updates and trends.",
      bgColor: "bg-yellow-500", // Yellow background for fifth slide
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[450px] overflow-hidden z-0">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out transform ${
            currentSlide === index
              ? "translate-x-0"
              : currentSlide === index + 1 ||
                (index === slides.length - 1 && currentSlide === 0)
              ? "-translate-x-full"
              : "-translate-x-[200%]"
          }`}
        >
          {/* Slide */}
          <div
            className={`w-full h-full ${slide.bgColor} flex items-center justify-center text-white`}
          >
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-2">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
              {/* More Info Button */}
              <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-400 transition-all duration-300">
                More Info
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full z-20"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full z-20"
      >
        &#8594;
      </button>

      {/* Live Section below HeroSection */}
      <div className="relative mt-[32%] bg-orange-900/40"> {/* Added margin-top */}
        <LiveSection /> {/* LiveSection will follow HeroSection */}
      </div>
    </section>
  );
};

export default HeroSection;
