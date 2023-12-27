import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setformData] = useState({
    Name: "",
    Phone_Number: "",
    Camera_Company: "",
    Camera_Model: "",
    Camera_Range: "",
    Latitude_Position: "",
    Longnitude_Position: "",
  });

  const changeHandler = (event) => {
    setformData((prevstate) => {
      return {
        ...prevstate,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const jsonData = {
        Name: formData.Name,
        Phone_Number: parseInt(formData.Phone_Number, 10),
        Camera_Company: formData.Camera_Company,
        Camera_Model: formData.Camera_Model,
        Camera_Range: formData.Camera_Range,
        Latitude_Position: parseFloat(formData.Latitude_Position),
        Longnitude_Position: parseFloat(formData.Longnitude_Position),
      };
      const response = await axios.post(
        "http://localhost:8000/api/user/camdetails",
        jsonData
      );

      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-12 p-3 bg-white rounded-md shadow-md">
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            value={formData.Name}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number
          </label>
          <input
            type="number"
            id="phone"
            name="Phone_Number"
            value={formData.Phone_Number}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Your Number"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cameraCompany"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Camera Company
          </label>
          <input
            type="text"
            id="cameraCompany"
            name="Camera_Company"
            value={formData.Camera_Company}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter the company of your camera"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cameraModel"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Camera Model
          </label>
          <input
            type="text"
            id="cameraModel"
            name="Camera_Model"
            value={formData.Camera_Model}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter the model of your camera"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cameraRange"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Camera Range
          </label>
          <input
            type="text"
            id="cameraRange"
            name="Camera_Range"
            value={formData.Camera_Range}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter the range of your camera"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="latitude"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Latitude
          </label>
          <input
            type="number"
            id="latitude"
            name="Latitude_Position"
            value={formData.Latitude_Position}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Your Latitude"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="longnitude"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Longnitude
          </label>
          <input
            type="number"
            id="longnitude"
            name="Longnitude_Position"
            value={formData.Longnitude_Position}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Your Longnitude"
          />
        </div>

        <div className="mb-2">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 text-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
