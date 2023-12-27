import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

import { useState } from "react";
const Map = () => {
  const [camera, setCamera] = useState([]);

  const mapData = async () => {
    const result = await axios.get("http://localhost:8000/api/user/camdetails");
    setCamera(result.data);
  };
  mapData();

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
