import { Calendar, MapPin, Star } from "lucide-react";

// Featured Tours Component
const FeaturedToursSection = () => {
  const tours = [
    {
      id: 1,
      location: "Pench National Park",
      duration: "3 Days, 2 Nights",
      price: "₹15,000",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1670421291781-4d54641ded9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRpZ2VyfGVufDB8fDB8fHww"
    },
    {
      id: 2,
      location: "Kanha National Park",
      duration: "2 Days, 1 Night",
      price: "₹12,000",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,

      location: "Tadoba National Park",
      duration: "4 Days, 3 Nights",
      price: "₹18,000",
      rating: 4.7,
      image: "https://media.istockphoto.com/id/1798800848/photo/sub-adult-leopard-crossing-paths-in-the-jungle.jpg?s=2048x2048&w=is&k=20&c=I36_urwIu34aG9N4xLPyJu3E8UsaFURjkza99ssiqjs="
    }
  ];

  return (
    <section id="tours" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Tours for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{tour.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span className="text-sm">{tour.duration}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Star size={16} className="text-yellow-400 mr-1" />
                  <span className="text-sm">{tour.rating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">{tour.price}</span>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            View All Tours
          </button>
        </div>
      </div>
    </section>
  );
};
export default FeaturedToursSection;