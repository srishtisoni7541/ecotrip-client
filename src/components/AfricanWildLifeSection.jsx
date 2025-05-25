
import React from "react";

const destinations = [
  {
    name: "Pench National Park",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Kaziranga National Park",
    image:
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Jim Corbet National Park",
    image:
      "https://images.unsplash.com/photo-1563729841-3e5922a0423a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdpbGRsaWZlJTIwYW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Kanha National Park",
    image:
      "https://media.istockphoto.com/id/519731334/photo/young-koala.webp?a=1&b=1&s=612x612&w=0&k=20&c=hiVeRP7fCJYt8d91aeszknk3BsShAoqXuboPWfSK-OM=",
  },
];

export default function AfricanWildlifeSection() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Best of African Wildlife Destinations
      </h2>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
        {/* Left tall image */}
        <div className="row-span-2 relative">
          <img
            src={destinations[0].image}
            alt={destinations[0].name}
            className="w-full h-full object-cover rounded"
          />
          <p className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-black/50 px-3 py-1 rounded">
            {destinations[0].name}
          </p>
        </div>

        {/* Top-right small image */}
        <div className="relative">
          <img
            src={destinations[2].image}
            alt={destinations[2].name}
            className="w-full h-full object-cover rounded"
          />
          <p className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-black/50 px-3 py-1 rounded">
            {destinations[2].name}
          </p>
        </div>

        {/* Bottom-right small image */}
        <div className="relative">
          <img
            src={destinations[3].image}
            alt={destinations[3].name}
            className="w-full h-full object-cover rounded"
          />
          <p className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-black/50 px-3 py-1 rounded">
            {destinations[3].name}
          </p>
        </div>

        {/* Bottom full-width image on the right side */}
        <div className="col-span-2 relative">
          <img
            src={destinations[1].image}
            alt={destinations[1].name}
            className="w-full h-full object-cover rounded"
          />
          <p className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-black/50 px-3 py-1 rounded">
            {destinations[1].name}
          </p>
        </div>
      </div>

      <div className="mt-10 w-full flex justify-center">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-lg">
          View All African Destinations
        </button>
      </div>
    </div>
  );
}
