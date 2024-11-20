import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import logo from "../../assets/full-logo-veridis-removebg-enhanced.png";
import { Drawer, Box, Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import {
  calculateTotalSolarEnergy,
  calculateTotalWindEnergy,
  calculateCO2EmissionsAvoided,
  calculatePaybackPeriod,
  divideIntoSeasons,
} from "../../helper/simulation";
import ResultsSummary from "../../components/results-summary";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ height: "64px", backgroundColor: "white", boxShadow: "none", borderBottom: "1px solid #ddd" }}
    >
      <Toolbar sx={{ height: "100%", display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" style={{ height: "48px", objectFit: "contain" }} />
      </Toolbar>
    </AppBar>
  );
};

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

export const EnergySimulation = () => {
  const [simulacao, setSimulacao] = useState(null);

  const initialInvestmentSolar = 12000;
  const initialInvestmentWind = 15000;
  const energyCostPerKWh = 0.15;

  const handleMapaClick = async (lat, lng) => {
    console.log("lat", lat, "\nlng", lng);
    try {
      const response = await axios.get(`https://power.larc.nasa.gov/api/temporal/hourly/point`, {
        params: {
          parameters: "ALLSKY_SFC_SW_DWN,WS10M",
          community: "RE",
          latitude: lat,
          longitude: lng,
          start: "20230101",
          end: "20231201",
          format: "JSON",
          time_standard: "utc",
        },
      });

      const data = response.data.properties.parameter;
      const solarData = data.ALLSKY_SFC_SW_DWN;
      const windData = data.WS10M;

      const totalSolarEnergy = calculateTotalSolarEnergy(solarData);
      const totalWindEnergy = calculateTotalWindEnergy(windData);

      const seasonData = divideIntoSeasons(solarData, windData);

      if (!seasonData || Object.keys(seasonData).length === 0) {
        throw new Error("Season data is empty or invalid");
      }

      const totalSolarKWh = totalSolarEnergy / 1000;
      const totalWindKWh = totalWindEnergy / 1000;
      const { solarCO2, windCO2 } = calculateCO2EmissionsAvoided(totalSolarKWh, totalWindKWh);

      const annualSolarSavings = totalSolarKWh * energyCostPerKWh;
      const annualWindSavings = totalWindKWh * energyCostPerKWh;
      const totalAnnualSavings = annualSolarSavings + annualWindSavings;

      const paybackSolar = calculatePaybackPeriod(initialInvestmentSolar, totalAnnualSavings);
      const paybackWind = calculatePaybackPeriod(initialInvestmentWind, totalAnnualSavings);

      setSimulacao({
        solarData,
        windData,
        results: { totalSolarEnergy, totalWindEnergy },
        seasonData,
        totalSolarKWh,
        totalWindKWh,
        solarCO2,
        windCO2,
        paybackSolar,
        paybackWind,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Header />
      <Mapa onClickMapa={handleMapaClick} />

      <Drawer
        anchor="right"
        open={!!simulacao}
        onClose={() => setSimulacao(null)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "526.29px",
            height: "655px",
            position: "fixed",
            top: "calc(50vh - 350px)",
            right: "50px",
            margin: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#74FFC7",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#EEEEEE",
            },
          },
        }}
      >
        <Box p={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6">Simulation Results</Typography>
          <IconButton onClick={() => setSimulacao(null)} sx={{ color: "#000" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box p={2}>
          {simulacao && (
            <ResultsSummary
              results={simulacao.results}
              seasonData={simulacao.seasonData}
              solarCO2={simulacao.solarCO2}
              windCO2={simulacao.windCO2}
              paybackSolar={simulacao.paybackSolar}
              paybackWind={simulacao.paybackWind}
            />
          )}
        </Box>
      </Drawer>
    </div>
  );
};
