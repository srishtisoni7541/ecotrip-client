
import img1 from "../Images/IndianWildImgLeftbtm.png";
import IndianWildImgLeftTop from '../Images/IndianWildImgLeftTop.png';
import IndianWildImgRightTop from '../Images/IndianWildImgRightTop.png';
import IndianWildImgLeftbtm from '../Images/IndianWildImgRightbtm.png';

const IndianWildlifeSection = () => {
  const destinations = [
    {
      id: 1,
      title: "Pench National Park",
      image: IndianWildImgLeftTop,
    },
    {
      id: 2,
      title: "Jim Corbet National Park",
      image: img1,
    },
    {
      id: 3,
      title: "Kaziranga National Park",
      image: IndianWildImgRightTop,
    },
    {
      id: 4,
      title: "Kanha National Park",
      image: IndianWildImgLeftbtm,
    },
  ];

  return (
    <div className="p-4 w-full px-28 mx-auto">
      <h2 className="text-6xl  font-bold mb-6 sm:mb-8 text-center">
        Best of Indian Wildlife Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[500px]">
        {/* Tall Left Image */}
        <div className="md:row-span-2 relative">
          <img
            src={destinations[0].image}
            alt={destinations[0].title}
            className="w-full h-60 sm:h-72 md:h-full object-cover rounded"
          />
          <p className="absolute bottom-4 left-4 text-white font-semibold text-sm sm:text-base bg-black/50 px-3 py-1 rounded">
            {destinations[0].title}
          </p>
        </div>

        {/* Top-Right Small Image */}
        <div className="relative">
          <img
            src={destinations[2].image}
            alt={destinations[2].title}
            className="w-full h-60 sm:h-72 object-cover rounded"
          />
          <p className="absolute bottom-4 left-4 text-white font-semibold text-sm sm:text-base bg-black/50 px-3 py-1 rounded">
            {destinations[2].title}
          </p>
        </div>

        {/* Bottom-Right Small Image */}
        <div className="relative">
          <img
            src={destinations[3].image}
            alt={destinations[3].title}
            className="w-full h-60 sm:h-72 object-cover rounded"
          />
          <p className="absolute bottom-4 left-4 text-white font-semibold text-sm sm:text-base bg-black/50 px-3 py-1 rounded">
            {destinations[3].title}
          </p>
        </div>

        {/* Bottom Full-Width Image */}
        <div className="md:col-span-2 relative mt-10">
          <img
            src={destinations[1].image}
            alt={destinations[1].title}
            className="w-full h-60 sm:h-72 md:h-full object-cover rounded"
          />
          <p className="absolute bottom-4 left-4 text-white font-semibold text-sm sm:text-base bg-black/50 px-3 py-1 rounded">
            {destinations[1].title}
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8 sm:mt-10 w-full flex justify-center">
        <button className="bg-[#2A9F00] hover:bg-green-700 text-white px-6 py-2 rounded text-base sm:text-lg">
          View All African Destinations
        </button>
      </div>
    </div>
  );
};

export default IndianWildlifeSection;
