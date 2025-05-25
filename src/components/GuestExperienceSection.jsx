// Guest Experiences Component
const GuestExperiencesSection = () => {
  const experiences = [
    {
      name: "Priya M.",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1737064682445-b3529e30bf27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxub3JtYWwlMjBwZW9wbGVzJTIwcGljJTIwc2luZ2xlJTIwbWFuJTIwd29tZW4lMjB3aXRoJTIwc21pbHklMjBmYWNlfGVufDB8fDB8fHww",
      text: "I was blown away by the exceptional service and amazing wildlife encounters. EcoTrip made my African safari dream come true. The guides were knowledgeable and the accommodations were perfect. Can't wait to book my next trip!"
    },
    {
      name: "Our Guests",
      location: "",
      image: "https://images.unsplash.com/photo-1737064682445-b3529e30bf27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxub3JtYWwlMjBwZW9wbGVzJTIwcGljJTIwc2luZ2xlJTIwbWFuJTIwd29tZW4lMjB3aXRoJTIwc21pbHklMjBmYWNlfGVufDB8fDB8fHww",
      text: "",
      isVideo: true
    },
    {
      name: "Rajesh K.",
      location: "Delhi, India",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      text: "Unforgettable experience! The tiger safari was absolutely incredible. Professional team, great organization, and memories that will last a lifetime. Highly recommend EcoTrip for wildlife enthusiasts!"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Experiences</h2>
          <p className="text-xl text-gray-600">shared by our beloved Guests</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              <div className="aspect-w-4 aspect-h-5">
                <img 
                  src={experience.image} 
                  alt={experience.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              
              {experience.isVideo ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Our Guests</h3>
                  </div>
                </div>
              ) : (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-sm font-bold">★</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{experience.name}</h4>
                      <p className="text-xs text-gray-300">{experience.location}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">{experience.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default GuestExperiencesSection;