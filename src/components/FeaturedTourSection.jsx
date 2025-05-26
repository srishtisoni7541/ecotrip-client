// import { Calendar, MapPin, Star } from "lucide-react";
// import img1 from '../Images/img1.png';
// import  img2 from '../Images/featuredImg2.png';
// import img3 from '../Images/featuredImg3.png';

// // Featured Tours Component
// const FeaturedToursSection = () => {
//   const tours = [
//     {
//       id: 1,
//       location: "Pench National Park",
//       duration: "3 Days, 2 Nights",
//       price: "₹15,000",
//       rating: 4.8,
//       image: img1,
//     },
//     {
//       id: 2,
//       location: "Kanha National Park",
//       duration: "2 Days, 1 Night",
//       price: "₹12,000",
//       rating: 4.9,
//       image:img2,
//     },
//     {
//       id: 3,

//       location: "Tadoba National Park",
//       duration: "4 Days, 3 Nights",
//       price: "₹18,000",
//       rating: 4.7,
//       image:img3,
//     }
//   ];

//   return (
//     <section id="tours" className="py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-5xl font-bold text-center mb-12">Featured Tours for You</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {tours.map((tour) => (
//             <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <div className="flex items-center text-gray-600 mb-2">
//                   <MapPin size={16} className="mr-1" />
//                   <span className="text-sm">{tour.location}</span>
//                 </div>
//                 <div className="flex items-center text-gray-600 mb-2">
//                   <Calendar size={16} className="mr-1" />
//                   <span className="text-sm">{tour.duration}</span>
//                 </div>
//                 <div className="flex items-center mb-4">
//                   <Star size={16} className="text-yellow-400 mr-1" />
//                   <span className="text-sm">{tour.rating}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-2xl font-bold text-green-600">{tour.price}</span>
//                   <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm transition-colors">
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-8">
//           <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
//             View All Tours
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default FeaturedToursSection;




import { Heart } from "lucide-react";
import img1 from '../Images/img1.png';
import img2 from '../Images/featuredImg2.png';
import img3 from '../Images/featuredImg3.png';

const FeaturedToursSection = () => {
  const tours = [
    {
      id: 1,
      location: "Pench National Park",
      date: "15 May, 2025",
      offer: "50% OFF",
      label: "Limited Time Offer",
      currentPrice: "₹17900",
      oldPrice: "₹25500",
      image: img1,
    },
    {
      id: 2,
      location: "Kanha National Park",
      date: "25 May, 2025",
      offer: "30% OFF",
      label: "Limited Time Offer",
      currentPrice: "₹14000",
      oldPrice: "₹20000",
      image: img2,
    },
    {
      id: 3,
      location: "Tadoba National Park",
      date: "5 June, 2025",
      offer: "20% OFF",
      label: "Limited Time Offer",
      currentPrice: "₹16000",
      oldPrice: "₹20000",
      image: img3,
    },
  ];

  return (
    <section id="tours" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">Featured Tours for You</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="max-w-sm rounded overflow-hidden shadow-md border border-gray-200">
              <img
                src={tour.image}
                alt={tour.location}
                className="w-full h-56 object-cover rounded-t"
              />

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold">{tour.location}</h2>
                  <Heart className="w-6 h-6 text-gray-500 hover:text-red-500 cursor-pointer" />
                </div>

                <p className="text-sm text-gray-600 mb-4">Date : {tour.date}</p>

                <div className="mb-2">
                  <p className="text-xs text-gray-500 font-semibold">{tour.offer}</p>
                  <p className="text-sm text-green-600 font-semibold">{tour.label}</p>
                </div>

                <div className="flex items-end gap-2 mb-2">
                  <p className="text-xl font-bold">{tour.currentPrice}</p>
                  <p className="text-sm text-gray-500 line-through">{tour.oldPrice}</p>
                </div>

                <p className="text-xs text-gray-500 mb-4">per person</p>

                <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-2 rounded">
                  View Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedToursSection;
