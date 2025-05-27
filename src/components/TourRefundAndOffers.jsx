const TourRefundAndOffers = () => {
  return (
    <div className="bg-[#f2f2f2] px-4 py-10 space-y-10 text-sm text-gray-800 w-full mx-auto">
      {/* Refund Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead>
            <tr className="text-black  rounded-md ">
              <th className="border bg-green-500 text-white text-xl w-[20%]   border-gray-300 px-2 py-10 text-left">
                Cancellation received no. of <br /> days before departure
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">0-10D</th>
              <th className="border border-gray-300 px-4 py-2 text-center">11-20D</th>
              <th className="border border-gray-300 px-4 py-2 text-center">21-30D</th>
              <th className="border border-gray-300 px-4 py-2 text-center">30-59D</th>
              <th className="border border-gray-300 px-4 py-2 text-center">&gt;60D</th>
              <th className="border border-gray-300 px-4 py-2 text-center">&gt;120D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-6 font-medium">Refund</td>
              <td className="border border-gray-300 px-4 py-2 text-center">10%</td>
              <td className="border border-gray-300 px-4 py-2 text-center">20%</td>
              <td className="border border-gray-300 px-4 py-2 text-center">40%</td>
              <td className="border border-gray-300 px-4 py-2 text-center">60%</td>
              <td className="border border-gray-300 px-4 py-2 text-center">80%</td>
              <td className="border border-gray-300 px-4 py-2 text-center">80%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Offers Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Offers For You</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {/* Offer Card 1 */}
          <div className="bg-white py-6 px-10 rounded-md shadow text-left w-full max-w-xs">
            <h3 className="text-[#00A859] text-xl font-bold mb-2">EARLY BIRD OFFER</h3>
            <p className="mt-4 text-xl">
              Book this tour at least 4 months before the date of departure and get flat 10% OFF off per person.
            </p>
          </div>
          {/* Offer Card 2 */}
          <div className="bg-white h-58 py-6 px-10 rounded-md shadow text-left w-full max-w-xs">
            <h3 className="text-[#00A859] text-xl font-bold mb-2">GROUP DISCOUNT OFFER</h3>
            <p className="mt-4 text-xl">
              Book this tour for 4 or more persons at the same time and get flat 10% OFF per person.
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <button className="bg-[#00A859] hover:bg-green-600 text-white px-6 py-2 rounded text-sm font-medium">
          Book Now
        </button>
        <button className="border border-gray-400 hover:bg-gray-100 text-sm px-6 py-2 rounded text-gray-800">
          Want to Customize this tour
        </button>
      </div>
    </div>
  );
};

export default TourRefundAndOffers;
