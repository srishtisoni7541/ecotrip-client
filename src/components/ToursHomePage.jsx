import { ChevronDown } from "lucide-react";
import img from '../Images/tourspageImg1.png';

const ToursHomePage = () => {
  return (
    <section className="bg-[#f5f5f5] pb-16">
      <div className="relative p-4 px-28">
        <img
          src={img}
          alt="Tiger"
          className="w-full rounded-md h-[300px] md:h-[400px] object-cover"
        />
      </div>

      <div className="text-center mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          Your next wild <br /> escape starts here
        </h1>

        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 bg-white px-4 py-4 rounded shadow-md max-w-xl mx-auto">
          <div className="flex flex-col text-left border-r md:pr-6 pr-0">
            <label className="text-sm font-semibold">Destination</label>
            <div className="flex items-center text-gray-500 text-sm gap-1">
              where are you going? <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <div className="flex flex-col text-left border-r md:pr-6 pr-0 md:pl-6">
            <label className="text-sm font-semibold">When</label>
            <div className="flex items-center text-gray-500 text-sm gap-1">
              when you are planning ? <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded mt-4 md:mt-0">
            Find Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToursHomePage;

