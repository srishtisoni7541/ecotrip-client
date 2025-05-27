import { CheckCircle } from "lucide-react";

const TourInfo = () => {
  return (
    <div className=" p-6 w-full overflow-hidden mx-auto px-26 text-sm text-gray-800">
      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-200">
        <span className="text-[#00A859] font-medium border-b-2 border-[#00A859] pb-1 cursor-pointer">
          Tour Inclusions
        </span>
        <span className="text-gray-400 cursor-pointer">Tour Exclusion</span>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Left side content */}
        <div className="md:col-span-2 space-y-2">
          <ul className="list-disc pl-5 space-y-2">
            <li>Accommodation in comfortable & convenient hotels</li>
            <li>Meals: Breakfast & Dinner as mentioned in the itinerary</li>
            <li>Travel by private vehicle (Sedan) as per the itinerary (Vehicle not at disposal)</li>
            <li>Sightseeing as mentioned in the itinerary (entrance and guide charges not included)</li>
            <li>1 Jeep Safari on shared basis – Morning Safari (subject to availability)</li>
            <li>1 Ltr. Water Bottle per person per day</li>
          </ul>
        </div>

        {/* Right side highlight box */}
        <div className="bg-[#0c1c2c] text-white p-10 px-6  rounded-md w-[100%] space-y-4">
          <h3 className="text-lg font-medium">We make ecotrip most preferred & valuable choice !</h3>
          <div className="flex items-center justify-between text-center">
            <div>
              <div className="text-xl font-bold">10+</div>
              <div className="text-sm">Years of experience</div>
            </div>
            <div>
              <div className="text-xl font-bold">99%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-xl font-bold">100%</div>
              <div className="text-sm">Safe & Well Being</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
            <div className="text-center">
              <CheckCircle className="mx-auto text-green-400" size={16} />
              Dependable Assistance
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto text-green-400" size={16} />
              Quality & Safety
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto text-green-400" size={16} />
              Responsible Tourism
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto text-green-400" size={16} />
              Transparent Pricing
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto text-green-400" size={16} />
              No Hidden Cost
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto text-green-400" size={16} />
              Guaranteed Service
            </div>
          </div>
        </div>
      </div>

      {/* Terms & Conditions Section */}
      <div className="mt-12 space-y-6">
        <h2 className="text-lg font-semibold">Terms & Conditions And Cancellation Policy</h2>

        <div>
          <h3 className="font-medium mb-2">Booking and Confirmation</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>A. To secure your reservation, a deposit or full payment is required as specified by the tour company.</li>
            <li>B. Bookings are subject to availability and are considered confirmed only upon receipt of payment.</li>
            <li>C. The tour company reserves the right to refuse or cancel bookings at their discretion.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-2">Itinerary and Schedule</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>A. The tour itinerary, including destinations, activities, and timings, is subject to change due to factors such as weather conditions, safety concerns, or unforeseen circumstances.</li>
            <li>B. The tour company will make reasonable efforts to notify participants in advance about any changes to the itinerary.</li>
            <li>C. Participants are responsible for arriving at the designated meeting point.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-2">Cancellation Policy</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cancellation requests must be made in writing either by email on contact@ecotrip.in</li>
            <li>Cancellation fees may apply based on the proximity to the tour start date.</li>
            <li>Refunds, if applicable, will be processed within 0-3 business days.</li>
            <li>Any bank or transaction fees incurred during the refund process will be deducted from the refund amount.</li>
            <li>In case of force majeure or unforeseen circumstances, the tour company reserves the right to cancel the tour and offer alternative options or a full refund.</li>
            <li>Participants are responsible for any non-refundable expenses incurred, such as visa fees or flight tickets, etc.</li>
            <li>Please refer following Cancellation norms of ecotrip to avoid further misunderstandings.</li>
            <li>Refund will be based on Tour Cost.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TourInfo;
