const Card = () => {
  const data = {
    _id: "6589f0eb53bf7458f38204c8",
    Name: "Chinmay",
    Phone_Number: 12349234,
    Camera_Company: "xdfake2",
    Camera_Model: "Es201D1",
    Camera_Range: "12m",
    Latitude_Position: 19.221,
    Longnitude_Position: 73.1639,
    createdAt: "2023-12-25T21:15:23.155Z",
    updatedAt: "2023-12-25T21:15:23.155Z",
    __v: 0,
  };

  return (
    <div className="max-w-xs mx-auto mt-10 overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-center">{data.Name}</h1>
        <p className="mt-1 text-sm text-center">
          Phone Number: {data.Phone_Number}
        </p>
        <p className="mt-1 text-sm text-center">
          Camera Company: {data.Camera_Company}
        </p>
        <p className="mt-1 text-sm text-center">
          Camera Model: {data.Camera_Model}
        </p>
        <p className="mt-1 text-sm text-center">
          Camera Range: {data.Camera_Range}
        </p>
        <p className="mt-1 text-sm text-center">
          Latitude Position: {data.Latitude_Position}
        </p>
        <p className="mt-1 text-sm text-center">
          Longnitude Position: {data.Longnitude_Position}
        </p>
      </div>
    </div>
  );
};

export default Card;
