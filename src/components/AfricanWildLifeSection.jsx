
// Best of African Wildlife Component
const AfricanWildlifeSection = () => {
  const destinations = [
    {
      id: 1,
      title: "Serengeti National Park",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Masai Mara",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Kruger National Park",
      image: "https://images.unsplash.com/photo-1563729841-3e5922a0423a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdpbGRsaWZlJTIwYW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 4,
      title: "Chobe National Park",
      image: "https://media.istockphoto.com/id/519731334/photo/young-koala.webp?a=1&b=1&s=612x612&w=0&k=20&c=hiVeRP7fCJYt8d91aeszknk3BsShAoqXuboPWfSK-OM="
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Best of African Wildlife Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div key={destination.id} className="relative group cursor-pointer">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="absolute rounded-lg flex items-end p-4">
                <h3 className="text-white font-semibold">{destination.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Explore All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default AfricanWildlifeSection;