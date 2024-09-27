import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1674313072675-4edb813d12e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGljZWxhbmR8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      {/* Hero Section */}
      <div className="text-center pt-10 mb-10">
        <h1 className="text-5xl md:text-6xl text-white mb-6">
          Find the perfect trip for you and discover extraordinary adventures
          with us!
        </h1>
        <p className="text-lg text-white mb-8 max-w-xl mx-auto">
          Embark on a journey of exploration and excitement as we guide you
          towards unforgettable experiences across the globe.
        </p>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>

      {/* Footer Section with Glassmorphism */}
      <footer className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-t border-white/30 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Footer Content Container */}
          <div className="flex flex-wrap justify-between items-start">
            {/* Footer Brand Section */}
            <div className="flex-1 text-center px-4 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 text-white">CelestialUI</h3>
              <p className="text-sm text-gray-300">
                Your gateway to the extraordinary beauty, culture, and exhilarating
                adventures awaiting in the captivating landscapes of Iceland.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 text-center px-4 mb-6 md:mb-0">
              <h4 className="font-bold mb-4 text-white">Navigations</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-gray-300">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-gray-300">
                    Travel Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-gray-300">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            {/* Social and Contact Info */}
            <div className="flex-1 text-center px-4">
              <h4 className="font-bold mb-4 text-white">Social</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline text-gray-300">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-gray-300">
                    X
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-gray-300">
                    Youtube
                  </a>
                </li>
              </ul>
              <h4 className="font-bold mt-6 mb-4 text-white">Contact Us</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">travel@CelestialUI.io</li>
                <li className="text-gray-300">(704) 555-0127</li>
                <li className="text-gray-300">
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-sm text-gray-300">
          <p className="mb-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </p>
          <p>©CelestialUI 2024. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

