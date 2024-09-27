import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import MobileHeroSection from "./MobileHeroSection";
import { useMediaQuery } from 'react-responsive';

const HeroSection: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1692211622245-28dc8acdce33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGlsbCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      {isMobile ? (
        <MobileHeroSection />
      ) : (
        <>
          {/* Navbar */}
          <nav className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-between items-center">
            <div className="text-black text-xl font-semibold">CelestialUI</div>
            <ul className="hidden md:flex space-x-8 text-black">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
              <li className="hover:text-gray-300 cursor-pointer">Destination</li>
              <li className="hover:text-gray-300 cursor-pointer">Gallery</li>
              <li className="hover:text-gray-300 cursor-pointer">Travel Packages</li>
            </ul>
            <div className="text-black hidden md:block">EN</div>
          </nav>

          {/* Hero Text */}
          <div className="absolute top-1/4 left-8 text-black max-w-lg px-4 md:px-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Weaving Your Dreams into Unforgettable Adventures
            </h1>
            <p className="mt-4 text-gray-300 text-sm md:text-base">
              Discover the captivating allure of Arctic wonders, from stunning landscapes to vibrant culture, on an unforgettable journey through the North.
            </p>
            <button className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-white text-black font-semibold rounded-full flex items-center hover:bg-gray-200">
              Booking Now
              <span className="ml-2">➔</span>
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="absolute bottom-8 right-8 md:bottom-16 md:right-8  md:space-y-4 flex md:flex-col">
            <a href="#" className="block bg-white p-2 md:p-3 rounded-full text-black">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="block bg-white p-2 md:p-3 rounded-full text-black">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="block bg-white p-2 md:p-3 rounded-full text-black">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>

          {/* Explore More */}
          <div className="absolute bottom-8 left-8 text-white flex items-center space-x-2 md:space-x-4">
            <span>Explore More</span>
            <span>↓</span>
          </div>
        </>
      )}

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
    </div>
  );
};

export default HeroSection;
