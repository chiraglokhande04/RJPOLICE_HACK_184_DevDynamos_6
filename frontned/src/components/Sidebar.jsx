import Map from "./Map";

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col fixed right-0 w-1/4 bg-gray-800 text-white">
      <div className="flex items-center justify-center p-4 pt-8">
        <h1 className="text-2xl font-bold">Map</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <Map />
      </div>
    </div>
  );
};

export default Sidebar;
