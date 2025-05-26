
import img1 from '../Images/AfricaImg1.png';
import img2 from '../Images/AfricaImg2.png';
import img3 from '../Images/AfricaImg3.png';
import img4 from '../Images/AfricaImg4.png';
const destinations = [
  {
    name: "Pench National Park",
    image:img1
  },
  {
    name: "Kaziranga National Park",
    image:img2
  },
  {
    name: "Jim Corbet National Park",
    image:img3},
  {
    name: "Kanha National Park",
    image:img4
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
