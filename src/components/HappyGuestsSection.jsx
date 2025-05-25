
import img1 from '../Images/HappyGuest1.png';
import img2 from '../Images/HappyGuest2.png';
import img3 from '../Images/HappyGuest3.png';
import img4 from '../Images/HappyGuest4.png';
import img5 from '../Images/HappyGuest5.png';

const HappyGuestsSection = () => {
  const guestImages = [
   img1,
   img2,
   img3,
   img4,
   img5
  ];

  const duplicated = [...guestImages, ...guestImages]; // for infinite effect

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-12 text-center">
          Over 18532+ Happy Guests at 158+ Global Destinations
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {duplicated.map((image, index) => (
              <div
                key={index}
                className="min-w-[300px] h-[200px] rounded-lg overflow-hidden shadow"
              >
                <img
                  src={image}
                  alt={`Happy guest ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyGuestsSection;
