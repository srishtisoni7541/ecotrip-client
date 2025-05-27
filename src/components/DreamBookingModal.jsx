import React from "react";

const DreamBookingModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center mb-2">Book Your Dream</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Fill the form below, our team will contact you.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your Name here"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone no.</label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <span className="px-3 text-lg">🇮🇳</span>
              <input
                type="tel"
                placeholder="Enter your number here"
                className="w-full px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Select Date & Time</label>
            <input
              type="datetime-local"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Enquiry For</label>
            <select
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              defaultValue="Tadoba National Park"
            >
              <option value="Tadoba National Park">Tadoba National Park</option>
              <option value="Tour Package">Tour Package</option>
              <option value="Custom Plan">Custom Plan</option>
              <option value="Corporate Booking">Corporate Booking</option>
            </select>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md mt-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DreamBookingModal;
