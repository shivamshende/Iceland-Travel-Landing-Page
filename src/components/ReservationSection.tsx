import React from "react";

const ReservationSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-2">
        {/* [Reservation] Label at the Top */}
        <p className="text-gray-500 text-sm text-center md:text-left">
          [Reservation]
        </p>

        {/* Heading (H2) Above Image */}
        <h2 className="text-5xl text-gray-900 mb-6 leading-tight text-center md:text-left">
          Secure spot for an unforgettable journey through Iceland's beauty and unique charms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Reservation Image"
              className="w-full h-96 object-cover rounded-lg"
            />

            {/* Carousel Arrows */}
            {/* <div className="absolute inset-y-0 right-0 flex items-center space-x-4 px-4">
              <button className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 text-black hover:bg-gray-300 shadow-md">
                ◀
              </button>
              <button className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 text-black hover:bg-gray-300 shadow-md">
                ▶
              </button>
            </div> */}
          </div>

          {/* Information Section */}
          <div className="flex flex-col justify-center">
            {/* Sub-heading */}
            <h3 className="text-3xl mb-4">The Lavender Dreams</h3>
            <p className="text-gray-600 text-lg mb-4">
              Explore botanical gardens, geothermal parks, and coastal vistas, each painting a unique canvas of natural splendor.
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                🌞 5 Days
              </span>
              <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                📅 Mar - Oct
              </span>
              <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                🏞️ Easy
              </span>
              <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                ✈️ Keflavik Airport
              </span>
              <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                🕒 Flexible
              </span>
            </div>

            {/* Price Section */}
            <div className="text-4xl mb-4">From $1,567</div>

            {/* Booking Button */}
            <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition duration-300">
              Booking Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;


