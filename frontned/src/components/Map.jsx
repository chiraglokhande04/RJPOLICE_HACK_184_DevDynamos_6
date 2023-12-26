import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { useEffect } from "react";

import { useState } from "react";
const Map = () => {
  const [camera, setCamera] = useState([]);

  const mapData = async () => {
    const result = await axios.get("http://localhost:8000/api/user/camdetails");
    setCamera(result.data);
  };
  mapData();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    // Check if Geolocation is supported by the browser
    if ("geolocation" in navigator) {
      // Get the current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition(position.coords);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, []);
  console.log(position);
  
  return (
    <MapContainer center={[19.2215, 73.1645]} zoom={12}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {camera.map((item) => (
        <Marker
          key={item._id}
          position={[item.Latitude_Position, item.Longnitude_Position]}
        >
          <Popup>{item.Name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
