import bgImg from "../Images/Group 26088726.png";
const HeroSection = () => {
  return (
    <div className="min-h-screen w-full py-10 px-20 ">
      <h1 className="text-6xl font-bold text-gray-800">Experience <br /> the wilderness </h1>
      <div className="mt-6">
        <p>Join group tours or customize your dream safari</p>
        <div className="buttons flex  gap-4 mt-5">
          <div className="buttonLeft py-1 px-3 rounded-sm bg-green-500 text-white">
            <h2>View all tours</h2>
          </div>
          <div className="buttonRight py-1 px-5 rounded-sm border">
            <h2>Customize your tour </h2>
          </div>
        </div>
      </div>
      <div className="video w-full relative rounded-md overflow-hidden mt-10  flex items-center justify-center">
        <img className="h-[50%] w-full object-fit" src="https://media.istockphoto.com/id/520373654/photo/bengal-tiger-on-a-tree-wildlife-shot.jpg?s=612x612&w=0&k=20&c=zg1FMF_Z83Wtn-_GmwHp4Rs_UaArgq8BF7YWGlk_YPM=" alt="" />
        <div className="text absolute text-white">
          <h3 className="text-5xl font-bold">The only </h3>
        <h3 className="text-5xl font-bold ml-8">company with</h3>
        <h1 className="text-8xl font-black">99%</h1>
        <h2 className="text-5xl font-bold ml-8">success</h2>
        <h1 className="text-7xl font-black">rate.</h1>
        </div>
      </div>

    </div>
  );
};
export default HeroSection;