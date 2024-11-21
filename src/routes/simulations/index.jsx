import React, { useState } from "react";
import "leaflet/dist/leaflet.css";

import { Drawer, Box, Typography, AppBar, Modal, Backdrop, Fade, Toolbar, IconButton, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import {
  calculateTotalSolarEnergy,
  calculateTotalWindEnergy,
  calculateCO2EmissionsAvoided,
  calculatePaybackPeriod,
  divideIntoSeasons,
} from "../../helper/simulation";
import Mapa from "../../map";
import Header from "../../components/header";
import ResultsSummary from "../../components/results-summary";
import SolarChart from "../../components/solar-chart";
import WindChart from "../../components/wind-chart";
import SimulationResults from "../../components/simulation-results";

export const EnergySimulation = () => {
  const [simulacao, setSimulacao] = useState(null);
  const [currentChart, setCurrentChart] = useState(null); // "solar" or "wind" to control modal content
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (chartType) => {
    setCurrentChart(chartType);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentChart(null);
  };

  const initialInvestmentSolar = 12000;
  const initialInvestmentWind = 15000;
  const energyCostPerKWh = 0.15;

  const handleMapaClick = async (lat, lng) => {
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
            width: "650px",
            height: "820px",
            position: "fixed",
            top: "calc(50vh - 400px)",
            right: "50px",
            margin: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          },
        }}
      >
        <Box
          p={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            zIndex: 1,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6">Resultados da simulação</Typography>
          <IconButton onClick={() => setSimulacao(null)} sx={{ color: "#000" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            padding: 2,
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
          }}
        >
          {simulacao && (
            <>
              <ResultsSummary
                results={simulacao.results}
                seasonData={simulacao.seasonData}
                solarCO2={simulacao.solarCO2}
                windCO2={simulacao.windCO2}
                paybackSolar={simulacao.paybackSolar}
                paybackWind={simulacao.paybackWind}
                handleOpenModal={handleOpenModal}
              />
              <SimulationResults results={simulacao} />
            </>
          )}
        </Box>
      </Drawer>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={isModalOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: 24,
              padding: 4,
              maxHeight: "80vh",
              height: "auto",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2, gap: 2 }}>
              <Chip
                label="Gráfico Solar"
                onClick={() => setCurrentChart("solar")}
                color={currentChart === "solar" ? "primary" : "default"}
              />
              <Chip
                label="Gráfico eólico"
                onClick={() => setCurrentChart("wind")}
                color={currentChart === "wind" ? "secondary" : "default"}
              />
            </Box>
            {currentChart === "solar" ? (
              <SolarChart solarData={simulacao?.solarData} onClose={handleCloseModal} />
            ) : (
              <WindChart windData={simulacao?.windData} onClose={handleCloseModal} />
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
