import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import BaseMap from "../components/layer/BaseMap";
import Province from "../components/layer/Province";


const Dashboard = () => {

  function ClickHandler({ onClick }) {
    useMapEvents({
      click: (e) => {
        onClick(e.latlng);
        console.log(e.latlng);
      },
    });
    return null;
  }

  const [position, setPosition] = useState(null);

  // function LocationMarker() {
  //   const [position, setPosition] = useState(null);
  //   const map = useMapEvents({
  //     click() {
  //       map.locate();
  //     },
  //     locationfound(e) {
  //       setPosition(e.latlng);
  //       map.flyTo(e.latlng, 13);
  //     },
  //     locationerror() {
  //       alert("Location access denied or not available.");
  //     },
  //   });

  //   return position === null ? null : (
  //     <Marker position={position}>
  //       <Popup>You are here</Popup>
  //     </Marker>
  //   );
  // }

  return (
    <div>
      <MapContainer
        style={{ height: "50vh", width: "50vw" }}
        center={[13, 100]}
        zoom={7}
      >
        <BaseMap />
        {/* <LocationMarker /> */}
        {position && (
          <Marker position={position}>
            <Popup>
              You clicked here: <br /> {position.lat.toFixed(5)}, {position.lng.toFixed(5)}
            </Popup>
          </Marker>
        )}

        <Marker position={[13.5, 101]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[15, 101]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>


        <Province />
        {/* Click event handler */}
        <ClickHandler onClick={(latlng) => setPosition(latlng)} />
      </MapContainer>

      {position && (
        <div  style={{ marginTop: "10px", padding: "10px", borderRadius: "5px" }}>
          <strong>Clicked Position:</strong> <br />
          Latitude: {position.lat}, Longitude: {position.lng}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
