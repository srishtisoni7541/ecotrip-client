import { CircleDot } from "lucide-react";

const Itinerary = () => {
  return (
    <div className="bg-[#f5f5f5]  p-6 w-full">
      <div className="w-full min-h-screen  p-6 mx-auto">
        {/* Tabs */}
        <div className="flex gap-6 mb-6">
          <span className="font-semibold border-b-2 border-black pb-1 cursor-pointer">
            Itinerary
          </span>
          <span className="text-gray-400 cursor-pointer">Tour Information</span>
          <span className="text-gray-400 cursor-pointer">Terms & Policy</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side: Timeline */}
          <div className="md:col-span-2">
            {/* Day 01 */}
            <div className="relative pl-6 mb-12">
              <div className="absolute left-0 top-1">
                <CircleDot className="text-black w-4 h-4" />
              </div>
              <h3 className="font-semibold mb-2">Day 01</h3>
              <p className="text-sm text-gray-700">
                Arrive at Nagpur Airport/Railway Station by 9 A.M. where our driver will greet you for the transfer to Tadoba <br /> National Park. Enjoy breakfast en route. Check-in to your pre-booked resort, freshen up, and have lunch by 1 <br /> PM. Your first jungle safari begins at 2 PM. After the safari, relax with evening tea/coffee. Dinner is served at <br /> 9 PM. Overnight stay at the resort.
              </p>
            </div>

            {/* Day 02 */}
            <div className="relative pl-6 mb-12">
              <div className="absolute left-0 top-1">
                <CircleDot className="text-black w-4 h-4" />
              </div>
              <h3 className="font-semibold mb-2">Day 02</h3>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Wake-up call at 4:30 AM with tea/coffee. Head out for the second jungle safari in Tadoba with a packed <br /> breakfast.</li>
                <li>After the safari, rest and freshen up. Lunch at 1 PM.</li>
                <li>Get ready for the third safari at 2 PM.</li>
                <li>Return to evening tea/coffee.</li>
                <li>Dinner at 8 PM followed by an overnight stay.</li>
                <li>Good night!</li>
              </ul>
            </div>

            {/* Day 03 */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-1">
                <CircleDot className="text-black w-4 h-4" />
              </div>
              <h3 className="font-semibold mb-2">Day 03</h3>
              <p className="text-sm text-gray-700">
                Good Morning. Wake up call by 4:30 AM. Tea/coffee. Get ready for 4th Jungle safari in Tadoba National <br /> Park with packed breakfast. After safari, we shall check out the stay. Driver with vehicle will be ready to <br /> drop you back at Nagpur Airport/Railway Station. Start safe journey towards home.
              </p>
            </div>
          </div>

          {/* Right Side: Placeholders */}
          <div className="space-y-6">
            <div className="bg-gray-200 h-[40%] w-[60%] rounded" />
            <div className="bg-gray-200  h-[40%] w-[60%]  rounded" />
            <div className="bg-gray-200  h-[40%] w-[60%]  rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
