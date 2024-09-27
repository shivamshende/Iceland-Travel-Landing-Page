import React from "react";

const GalleriesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title and Description */}
        <div className="mb-12">
          <p className="text-gray-500 text-sm mb-2">[Galleries]</p>
          <h2 className="text-4xl mb-4">
            A visual journey through the lens, one snapshot at a time capturing the essence of our travel adventures around the world.
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1508904418226-3ec4cb9d241d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gallery Image 1"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Second Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1444090695923-48e08781a76a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gallery Image 2"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Explore More Button */}
        <div className="mt-10">
          <button className="text-gray-800 font-semibold flex items-center space-x-2 hover:underline">
            <span>Explore More</span>
            <span>➔</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleriesSection;
