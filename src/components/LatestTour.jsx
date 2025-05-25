// import TourCard from "./TourCard";

// export default function LatestTours() {
//   const tours = [
//     { title: 'Tour name– Lorem ipsum a a dummy text', date: '01 July 2025' ,img:"https://images.unsplash.com/photo-1567297523281-61d431db9427?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmUlMjBhbmltYWxzfGVufDB8fDB8fHww" },
//     { title: 'Branding & Beyond–Pench Edition', date: '01 July 2025',img:"https://plus.unsplash.com/premium_photo-1711343703125-6166db2001f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lsZGxpZmUlMjBhbmltYWxzfGVufDB8fDB8fHww" },
//     { title: 'Branding & Beyond–Pench Edition', date: '01 July 2025',img:"https://images.unsplash.com/photo-1594842104147-24bc1953a7b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbGRsaWZlJTIwYW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D" },
//     { title: 'Branding & Beyond–Pench Edition', date: '01 July 2025',img:"https://images.unsplash.com/photo-1718699861721-623b3e11771e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbGRsaWZlJTIwYW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D" },
//   ];
//   return (
//     <div>
//       <div className="flex justify-between mb-3 w-full">
//         <h2 className="font-bold text-lg">Latest tours</h2>
//         <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded">All Tours</button>
//       </div>
//       <div className="space-y-4">
//         {tours.map((tour, idx) => <TourCard key={idx} {...tour} />)}
//       </div>
//     </div>
//   );
// }




import TourCard from "./TourCard";

export default function LatestTours() {
  const tours = [
    {
      title: 'Tour name– Lorem ipsum a a dummy text',
      date: '01 July 2025',
      img: "https://images.unsplash.com/photo-1567297523281-61d431db9427?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmUlMjBhbmltYWxzfGVufDB8fDB8fHww"
    },
    {
      title: 'Branding & Beyond–Pench Edition',
      date: '01 July 2025',
      img: "https://plus.unsplash.com/premium_photo-1711343703125-6166db2001f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lsZGxpZmUlMjBhbmltYWxzfGVufDB8fDB8fHww"
    },
    {
      title: 'Branding & Beyond–Pench Edition',
      date: '01 July 2025',
      img: "https://images.unsplash.com/photo-1594842104147-24bc1953a7b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbGRsaWZlJTIwYW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: 'Branding & Beyond–Pench Edition',
      date: '01 July 2025',
      img: "https://images.unsplash.com/photo-1718699861721-623b3e11771e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbGRsaWZlJTIwYW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <div>
      <div className="flex justify-between mb-3 w-full">
        <h2 className="font-bold text-lg">Latest tours</h2>
        <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded">All Tours</button>
      </div>

      {/* Scrollable container with fixed height */}
      <div className="space-y-4 h-[85%] overflow-y-auto pr-2">
        {tours.map((tour, idx) => <TourCard key={idx} {...tour} />)}
      </div>
    </div>
  );
}
