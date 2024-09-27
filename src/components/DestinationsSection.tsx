import React from 'react';

type Destination = {
  title: string;
  description: string;
  image: string;
};

const destinations: Destination[] = [
  {
    title: "Askja Caldera",
    description:
      "A glimpse into Iceland’s raw natural beauty and geological wonders. From its dramatic crater lakes to its desolate volcanic landscapes, this destination promises an unforgettable adventure.",
    image:
      "https://plus.unsplash.com/premium_photo-1673002094359-6e2de18bf37b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aWNlbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Mossy Mountain Hillside",
    description:
      "A sense of peace and serenity with nature and experience the beauty of Iceland’s wild landscapes.",
    image:
      "https://plus.unsplash.com/premium_photo-1674086970773-726e445f5802?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Reynisfjara Black Sand Beach",
    description:
      "A volcanic shore, towering cliffs, and dramatic seascapes, this iconic beach is a must-visit destination for nature lovers and adventurers alike.",
    image:
      "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const DestinationsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-gray-500 text-sm mb-2">[Destinations]</p>
          <div className="flex flex-col lg:flex-row justify-between items-start w-full">
            <h2 className="text-4xl w-full lg:w-2/3 mb-4 lg:mb-0">
              A unique blend of adventure, culture, and natural wonders
            </h2>
            <p className="text-gray-500 text-lg w-full lg:w-1/2 lg:ml-6">
              Discover a fusion of adventure, culture, and scenic beauty across
              our diverse destinations, offering unforgettable experiences at
              every turn.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First large image card */}
          <div className="relative col-span-1 md:col-span-2">
            <img
              src={destinations[0].image}
              alt={destinations[0].title}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-6 text-white">
              <h3 className="text-2xl font-bold">{destinations[0].title}</h3>
              <p className="mt-2 text-gray-300">{destinations[0].description}</p>
            </div>
          </div>

          {/* Smaller image cards */}
          {destinations.slice(1).map((destination, index) => (
            <div key={index} className="relative col-span-1">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-6 text-white">
                <h3 className="text-xl font-bold">{destination.title}</h3>
                <p className="mt-2 text-gray-300">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
