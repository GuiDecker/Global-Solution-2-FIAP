import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = ({ onClickMapa }) => {
  // Estado para armazenar os pontos clicados
  const [markerPosition, setMarkerPosition] = useState(null);

  // Manipulador de evento para o clique no mapa
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

  // Ícone customizado para o marcador
  const redIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Você pode substituir este link por uma URL de um ícone vermelho de sua preferência
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer center={[-14.235, -51.9253]} zoom={4} style={{ height: "500px", width: "100%" }}>
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
