export default function CreateTourForm() {
  return (
    <div className="bg-white p-5 rounded shadow space-y-4">
      <h2 className="text-lg font-bold">Create Tour</h2>
      <input className="w-full border p-2 rounded" placeholder="Tour Title" />
      <input className="w-full border p-2 rounded" placeholder="short description" />
      <div className="flex space-x-2">
        <input className="w-1/2 border p-2 rounded" placeholder="Fake Price of tour" />
        <input className="w-1/2 border p-2 rounded" placeholder="Price of tour" />
      </div>
      <input className="w-full border p-2 rounded" placeholder="Tag Name" />
      <select className="w-full border p-2 rounded">
        <option>ex. Pench national park</option>
      </select>
      <div className="border-dashed border-2 border-gray-300 rounded h-32 flex flex-col justify-center items-center">
        <span className="text-xl">⬆</span>
        <p className="text-xs">Upload Thumbnail</p>
      </div>
      <button className="w-full bg-blue-500 text-white p-2 rounded">Create Tour</button>
    </div>
  )}