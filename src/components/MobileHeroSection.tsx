import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const MobileHeroSection: React.FC = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1469212044023-0e55b4b9745a?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Mobile Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-black bg-opacity-50">
        <div className="text-white text-xl font-semibold">CelestialUI</div>
        <button
          className="text-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-75 z-20"></div>
          <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75 z-30 transition-opacity duration-300 ease-in-out">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={toggleMenu}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="text-white text-lg space-y-4">
              <li><a href="#" onClick={toggleMenu}>Home</a></li>
              <li><a href="#" onClick={toggleMenu}>Destination</a></li>
              <li><a href="#" onClick={toggleMenu}>Gallery</a></li>
              <li><a href="#" onClick={toggleMenu}>Travel Packages</a></li>
            </ul>
          </div>
        </>
      )}

      {/* Mobile Hero Text */}
      <div className="absolute top-1/4 left-0 right-0 px-4 text-black flex flex-col items-center">
  <h1 className="text-3xl font-bold leading-tight mb-4 text-center">
    Weaving Your Dreams into Unforgettable Adventures
  </h1>
  <p className="text-sm mb-6 text-center">
    Discover the captivating allure of Arctic wonders, from stunning landscapes to vibrant culture, on an unforgettable journey through the North.
  </p>
  <button className="px-6 py-3 bg-white text-black font-semibold rounded-full flex items-center justify-center hover:bg-gray-200 mt-4 md:mt-6 lg:mt-8">
    Booking Now
    <span className="ml-2">➔</span>
  </button>
</div>


      {/* Mobile Social Media Icons */}
      <div className="absolute bottom-8 flex space-x-4">
        <a href="#" className="block bg-white p-3 rounded-full text-black hover:bg-gray-200">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="block bg-white p-3 rounded-full text-black hover:bg-gray-200">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="block bg-white p-3 rounded-full text-black hover:bg-gray-200">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>

      {/* Mobile Explore More */}
      <div className="absolute bottom-16 text-white flex items-center space-x-2 mb-10">
        <span>Explore More</span>
        <span>↓</span>
      </div>
    </div>
  );
};

export default MobileHeroSection;
