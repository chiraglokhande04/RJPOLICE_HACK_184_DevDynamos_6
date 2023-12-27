const Card = ({ item }) => {
  return (
    <div className="max-w-xs mx-auto mt-10 overflow bg-white rounded-lg shadow-lg">
      <div className="px-4 py-2 text-center">
        <h1 className="text-xl font-bold ">{item.Name}</h1>
        <p className="mt-1 text-sm ">Phone Number: {item.Phone_Number}</p>
        <p className="mt-1 text-sm ">Camera Company: {item.Camera_Company}</p>
        <p className="mt-1 text-sm ">Camera Model: {item.Camera_Model}</p>
        <p className="mt-1 text-sm ">Camera Range: {item.Camera_Range}</p>
        <p className="mt-1 text-sm ">
          Latitude Position: {item.Latitude_Position}
        </p>
        <p className="mt-1 text-sm ">
          Longnitude Position: {item.Longnitude_Position}
        </p>
      </div>
    </div>
  );
};

export default Card;
