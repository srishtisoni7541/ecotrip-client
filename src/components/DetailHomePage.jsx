import { useState } from "react";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import tigerImg from "../Images/featuredImg3.png";
import { NavLink } from "react-router-dom";
import DreamBookingModal from "./DreamBookingModal";

const DetailHomePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-[#f5f5f5] min-h-screen px-28 py-4 relative">
      {/* Back Button */}
      <div className="mb-4 flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
        <ChevronLeft size={18} />
        <NavLink to="/">Back</NavLink>
      </div>

      {/* Modal */}
      {showModal && <DreamBookingModal onClose={() => setShowModal(false)} />}

      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
          showModal ? "blur-sm pointer-events-none" : ""
        }`}
      >
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold">Tadoba National Park -</h1>
          <p className="text-gray-600 mt-1">Real Land of Tigers</p>

          <div className="flex items-center gap-4 mt-4 text-sm text-gray-800">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-green-600" />
              14 to 16 Jun, 2024
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-green-600" />
              Duration : 3D - 2N
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-700 text-sm">Price :</p>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-2xl font-bold text-black">₹17990</span>
              <span className="line-through text-gray-400 text-lg">₹25990</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Per Person</p>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setShowModal(true)}
            className="bg-green-600 cursor-pointer text-white px-6 py-2 rounded font-semibold hover:bg-green-700">
              Book Now
            </button>
            <button
              onClick={() => setShowModal(true)}
             className="border border-gray-400 px-6 py-2 cursor-pointer rounded font-semibold hover:bg-gray-100">
              Want to Customize this tour
            </button>
          </div>

          <hr className="my-6" />

          <h3 className="text-lg font-semibold mb-3">Tour Includes</h3>
          <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              🏨 <span>Hotels</span>
            </div>
            <div className="flex items-center gap-2">
              🚍 <span>Transport</span>
            </div>
            <div className="flex items-center gap-2">
              🍽️ <span>Meal</span>
            </div>
            <div className="flex items-center gap-2">
              🗺️ <span>Sightseeing</span>
            </div>
            <div className="flex items-center gap-2">
              🛡️ <span>Travel Insurance</span>
            </div>
            <div className="flex items-center gap-2">
              🍽️ <span>Meal</span>
            </div>
            <div className="flex items-center gap-2">
              🗺️ <span>Sightseeing</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <img
            src={tigerImg}
            alt="Tiger"
            className="w-full h-64 object-cover rounded"
          />

          <div className="border p-4 rounded bg-white">
            <p className="font-semibold text-lg mb-4">Wants us to call you ?</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1">Contact</label>
                <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                  <span className="mr-2">🇮🇳</span>
                  <input
                    type="text"
                    placeholder="Contact*"
                    className="w-full outline-none"
                  />
                </div>
              </div>
            </div>
            <button
              className="bg-green-600 text-white px-6 py-2 rounded mt-4 hover:bg-green-700"
              onClick={() => setShowModal(true)} // 👈 open modal
            >
              Request a Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHomePage;
