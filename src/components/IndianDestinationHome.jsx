// WildlifeBanner.jsx
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import deerImg from '../Images/deer.png';

const IndianDestinationHome = () => {
  return (
    <div className="w-full bg-white px-28 py-10">
      {/* Banner Image */}
      <img
        src={deerImg}
        alt="wildlife"
        className="w-full h-[300px] object-cover rounded-md"
      />

      {/* Title */}
      <div className="text-center mt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Best Of Indian <br />
          Wildlife Destinations
        </h1>
      </div>

      {/* Search Box */}
      <div className="mt-6 flex justify-center">
        <div className="bg-white shadow-md rounded-md p-4 flex gap-4 items-center">
          {/* Destination */}
          <div className="flex items-center border rounded px-3 py-2 gap-2 w-[200px]">
            <FaMapMarkerAlt className="text-green-600" />
            <div>
              <p className="text-xs text-gray-500">Destination</p>
              <select className="text-sm bg-transparent outline-none w-full">
                <option>Where are you going?</option>
                <option>Jim Corbett</option>
                <option>Kaziranga</option>
              </select>
            </div>
          </div>

          {/* When */}
          <div className="flex items-center border rounded px-3 py-2 gap-2 w-[200px]">
            <FaRegCalendarAlt className="text-green-600" />
            <div>
              <p className="text-xs text-gray-500">When</p>
              <input
                type="date"
                className="text-sm bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Button */}
          <button className="bg-green-500 text-white font-semibold px-5 py-2 rounded hover:bg-green-600">
            Find Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndianDestinationHome;
