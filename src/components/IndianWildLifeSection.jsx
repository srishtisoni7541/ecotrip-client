// Best of Indian Wildlife Component
const IndianWildlifeSection = () => {
  const destinations = [
    {
      id: 1,
      title: "Pench National Park",
      image:
        "https://media.istockphoto.com/id/1397004186/photo/two-very-cute-small-wild-tiger-cubs-with-her-mom-showing-love-and-affection-to-her-mother.jpg?s=2048x2048&w=is&k=20&c=XQAJ-dc-rlxdsbAdhBD-gUaptO1JEH8Wqb8fX7XOGm4=",
    },
    {
      id: 2,
      title: "Jim Corbet National Park",
      image:
        "https://media.istockphoto.com/id/479037543/photo/tiger.webp?a=1&b=1&s=612x612&w=0&k=20&c=DE20HO23rmZPeedue1sILPSd1q2HRHSJ1bxFRXznyiA=",
    },
    {
      id: 3,
      title: "Kaziranga National Park",
      image:
        "https://plus.unsplash.com/premium_photo-1664301680046-deb815ddff0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVlciUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      title: "Kanha National Park",
      image:
        "https://images.unsplash.com/photo-1713637728687-da1fda40d1a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVmZmFsbG8lMjBwaWN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <section id="destinations" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Best of Indian Wildlife Destinations
        </h2>
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
              <div className="absolute  rounded-lg flex items-end p-4">
                <h3 className="text-white font-semibold">
                  {destination.title}
                </h3>
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
export default IndianWildlifeSection;
