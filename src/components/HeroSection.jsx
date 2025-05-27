import video from '../videos/video.mp4';

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full py-10 px-4 md:px-20">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
        Experience <br /> the wilderness
      </h1>

      {/* Subtext & Buttons */}
      <div className="mt-6">
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          Join group tours or customize your dream safari
        </p>
        <div className="buttons flex flex-col sm:flex-row gap-4 mt-5">
          <div className="buttonLeft py-2 px-4 rounded-sm bg-[#2A9F00] text-white text-center">
            <h2 className="text-base sm:text-lg">View all tours</h2>
          </div>
          <div className="buttonRight py-2 px-4 rounded-sm border text-center sm:hidden">
            <h2 className="text-base sm:text-lg ">Customize your tour</h2>
          </div>
        </div>
      </div>

      {/* Image with Text Overlay */}
      <div className="video w-full relative rounded-md overflow-hidden mt-10 flex items-center justify-center">
        <video className='h-full w-full object-cover' autoPlay muted loop src={video}></video>
      
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-2">
          <h3 className="text-2xl sm:text-4xl font-bold">The only</h3>
          <h3 className="text-2xl sm:text-4xl font-bold">company with</h3>
          <h1 className="text-5xl sm:text-7xl font-black">99%</h1>
          <h2 className="text-2xl sm:text-4xl font-bold">success</h2>
          <h1 className="text-4xl sm:text-6xl font-black">rate.</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
