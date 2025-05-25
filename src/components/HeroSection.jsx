import bgImg from "../Images/Group 26088726.png";
const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${bgImg}')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Experience<br />
          the wilderness
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          We only<br />
          offer success<br />
          rate.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
          Start Your Adventure
        </button>
      </div>
    </section>
  );
};
export default HeroSection;