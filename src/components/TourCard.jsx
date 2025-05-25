function TourCard({ title, date,img }) {
  return (
    <div className="bg-white p-3 rounded shadow flex items-start space-x-3">
      <img className="w-[200px]" src={img} alt="" />
      <div className="">
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-gray-500">Date: {date}</p>
        <button className="mt-10 text-xs bg-blue-500 text-white px-3 py-1 rounded">Edit Tour</button>
      </div>
    </div>
  );
}
export default TourCard;