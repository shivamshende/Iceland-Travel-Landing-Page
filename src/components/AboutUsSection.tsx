import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-gray-500 text-sm mb-2">[About Us]</p>
          <div className="flex flex-col lg:flex-row justify-between items-start w-full">
            <h2 className="text-4xl w-full lg:w-2/3 mb-4 lg:mb-0">
              AIt all began with a single journey—a trip to the land of fire and ice that sparked a profound love for Iceland.
            </h2>
            <p className="text-gray-500 text-lg w-full lg:w-1/2 lg:ml-6">
            Enchanted by its rugged beauty and rich culture, we knew we had found something truly special.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 flex justify-center space-x-16">
          <div className="text-center">
            <h3 className="text-5xl text-black">95%</h3>
            <p className="mt-2 text-gray-500">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl text-black">72+</h3>
            <p className="mt-2 text-gray-500">Popular Destinations</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl text-black">250+</h3>
            <p className="mt-2 text-gray-500">Experienced Guides</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
