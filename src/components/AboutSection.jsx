import img1 from '../Images/AboutImg1.png';
import tiger from '../Images/AboutImg2.png';

const AboutSection = () => {
  return (
    <div className="bg-white py-10 px-28">
      {/* About Us */}
      <div className="text-center mb-10">
        <h2 className="text-green-600 text-5xl font-bold mb-4">About us</h2>
        <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
          Ecotrip has been a leader in Wildlife & Adventure Tourism for over a decade,
          guiding individuals, families, and photographers through nature’s wonders. 
          With 500+ tours in India and Africa, our expert team offers a personalized, immersive experience. 
          We’re committed to ethical travel and conservation, ensuring every journey gives back to nature.
        </p>
      </div>

      {/* Image of Elephants */}
      <div className="mb-16">
        <img
          src={img1}
          alt="Elephants"
          className="w-full object-cover rounded-md"
        />
      </div>

      {/* What We Do */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-black text-5xl font-bold mb-4">What We Do</h3>
          <p className="text-gray-700 text-xl leading-relaxed">
            <strong>Trusted Travel, Lasting Memories</strong><br />
            We value your time and money, and ensure <br /> every journey is smooth, memorable, and <br /> worth it. 
            From safaris to workshops, your <br /> satisfaction is our success — just ask our <br /> happy travelers worldwide.
          </p>
        </div>

        {/* Tiger Image */}
        <div className="flex-shrink-0 w-full md:w-[300px]">
          <img
            src={tiger}
            alt="Tiger"
            className="w-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
