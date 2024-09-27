import React from "react";

interface Package {
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

const packages: Package[] = [
  {
    title: "Catching the Auroras",
    description:
      "Mesmerizing journey to witness the enchanting Aurora Borealis the Northern Lights",
    duration: "5 Days, 4 Nights",
    price: "$850/Night",
    image:
      "https://plus.unsplash.com/premium_photo-1673254848715-27024acbb456?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Golden Circle Adventure",
    description:
      "Explore the famous Golden Circle, featuring geothermal parks, waterfalls, and natural wonders.",
    duration: "3 Days, 2 Nights",
    price: "$1,235/Night",
    image:
      "https://images.unsplash.com/photo-1477240381028-271008c7415c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Glacier Expedition",
    description:
      "Experience thrilling outdoor adventures through glaciers, ice caves, and frozen landscapes.",
    duration: "7 Days, 6 Nights",
    price: "$540/Night",
    image:
      "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const PackagesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gray-500 text-sm mb-2">[Packages]</p>
          <div className="flex flex-col lg:flex-row justify-between items-start w-full">
            <h2 className="text-4xl w-full lg:w-2/3 mb-4 lg:mb-0">
              Choose our range of expertly crafted packages
            </h2>
            <p className="text-gray-500 text-lg w-full lg:w-1/2 lg:ml-6">
              Whether you’re seeking awe-inspiring landscapes, thrilling outdoor
              adventures, or immersive cultural experiences, CelestialUI has the
              perfect itinerary for you.
            </p>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative group transition-transform transform hover:scale-105"
            >
              {/* Image */}
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-80 object-cover rounded-lg transition-transform transform group-hover:scale-105"
              />

              {/* Overlay Book Button */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" style={{ bottom: '20px' }}>
                <button className="text-white text-lg font-semibold bg-white bg-opacity-20 py-3 px-6 rounded-full backdrop-blur-sm">
                  Book Seat
                </button>
              </div>

              {/* Info Section */}
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex space-x-2 mb-2">
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                    {pkg.duration}
                  </span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                    {pkg.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{pkg.title}</h3>
                <p className="text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {pkg.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
