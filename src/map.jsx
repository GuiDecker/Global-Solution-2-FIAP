import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = ({ onClickMapa }) => {
  const [markerPosition, setMarkerPosition] = useState(null);

  const HandleClick = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setMarkerPosition({ lat, lng });
        onClickMapa(lat, lng);
      },
    });
    return null;
  };

  const redIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      center={[-14.235, -51.9253]}
      zoom={4}
      style={{ height: "calc(100vh - 64px)", width: "100vw", position: "fixed", top: "64px", left: 0 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <HandleClick />
      {markerPosition && (
        <Marker position={markerPosition} icon={redIcon}>
          <Popup>Você clicou aqui!</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Mapa;
