


const HappyGuestsSection = () => {
  const guestImages = [
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1572262280988-53b4269f4af9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
                className="min-w-[200px] h-[200px] rounded-lg overflow-hidden shadow"
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
