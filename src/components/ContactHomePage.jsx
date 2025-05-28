import React, { useState } from "react";

const ContactHomePage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [enquiry, setEnquiry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      phone,
      city,
      enquiry,
    });
    // Optional: reset form
    setName("");
    setPhone("");
    setCity("");
    setEnquiry("");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
      <div className="w-full max-w-5xl">
        <h1 className="text-center text-green-600 text-3xl font-bold mb-10">
          We are listening
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="bg-white p-6 shadow rounded-md">
            <h2 className="text-lg font-semibold mb-4">Contact Info.</h2>

            <div className="mb-4 border rounded-md p-3">
              <p className="text-sm text-gray-600">Mob. No.</p>
              <p className="text-sm text-gray-800">+91 91686 22882</p>
              <p className="text-sm text-gray-800">+91 92268 72882</p>
            </div>

            <div className="mb-4 border rounded-md p-3">
              <p className="text-sm text-gray-600">Email us</p>
              <p className="text-sm text-gray-800">contact@ecotrip.in</p>
            </div>

            <div className="border rounded-md p-3">
              <p className="text-sm text-gray-600 mb-1">Visit us</p>
              <div className="flex space-x-3 text-gray-600 text-xl">
                <i className="fa fa-map-marker"></i>
                <i className="fa fa-instagram"></i>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white p-6 shadow rounded-md">
            <h2 className="text-lg font-semibold mb-4">Inquiry Form</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your Name here"
                    className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <label className="text-sm text-gray-600">Phone no.</label>
                  <div className="flex mt-1 border rounded-md overflow-hidden">
                    <span className="px-2 flex items-center bg-gray-100 text-sm">
                      🇮🇳
                    </span>
                    <input
                      type="tel"
                      placeholder="Enter your no."
                      className="w-full px-3 py-2 text-sm outline-none"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600">City</label>
                <input
                  type="text"
                  placeholder="Bhopal"
                  className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Enquiry For</label>
                <input
                  type="text"
                  placeholder="Enquiry"
                  className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
                  value={enquiry}
                  onChange={(e) => setEnquiry(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700"
              >
                See More
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHomePage;
