import React, { useState } from "react";
import SunIcon from "../assets/icons/solar/sun-icon.jsx";
import WindIcon from "../assets/icons/wind/wind-icon.jsx";
import EngineSizeWindIcon from "../assets/icons/wind/enginesize-wind-icon.jsx";
import PanelefiSolarIcon from "../assets/icons/solar/panelefi-solar-icon.jsx";
import PanelSizeSolarIcon from "../assets/icons/solar/panelsize-solar-icon.jsx";

const SimulationResults = ({ results }) => {
  const [panelArea, setPanelArea] = useState(30); // in m²
  const [efficiency, setEfficiency] = useState(20); // 20% no início (escala 0-100)
  const [turbineRadius, setTurbineRadius] = useState(20); // 20m
  const airDensity = 1.225; // kg/m³ (valor constante por enquanto)

  const { solarData, windData } = results || {};
  const calculateSolarEnergy = () => {
    if (!solarData || Object.keys(solarData).length === 0) {
      return "Nenhum dado disponível";
    }

    const energyKWh = Object.values(solarData).reduce((total, irradiance) => {
      return total + (irradiance * panelArea * (efficiency / 100)) / 1000; // Converte a eficiência para decimal
    }, 0);
    return energyKWh.toFixed(2); // total kWh
  };

  const calculateWindEnergy = () => {
    if (!windData || Object.keys(windData).length === 0) {
      return "Nenhum dado disponível";
    }

    const rotorArea = Math.PI * Math.pow(turbineRadius, 2); // A = πr²
    const totalEnergy = Object.values(windData).reduce((total, windSpeed) => {
      const power = 0.5 * airDensity * rotorArea * Math.pow(windSpeed, 3); // P = 0.5 * ρ * A * v³
      return total + power * (1 / 3600); // Convert watts to kWh (1 hour = 3600 seconds)
    }, 0);
    return (totalEnergy / 1000).toFixed(2); // Convert to MWh
  };

  // Função para garantir que o valor de eficiência esteja entre 0 e 100%
  const handleEfficiencyChange = (e) => {
    let value = Number(e.target.value);
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    setEfficiency(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        fontFamily: "Arial, sans-serif",
        alignItems: "center",
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      {/* Centralized Title */}
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Fazer previsões</h3>

      {/* Main Container */}
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "900px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          gap: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Solar Section */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "15px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <PanelSizeSolarIcon />
            <label style={{ flex: 1 }}>
              <b>Área do Painel (m²):</b>
              <input
                type="number"
                value={panelArea}
                onChange={(e) => setPanelArea(Number(e.target.value))}
                style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px", width: "100%" }}
              />
            </label>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <PanelefiSolarIcon />
            <label style={{ flex: 1 }}>
              <b>Eficiência (%):</b>
              <input
                type="number"
                value={efficiency}
                onChange={handleEfficiencyChange}
                min="0"
                max="100"
                style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px", width: "100%" }}
              />
            </label>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "1.1em" }}>
            <SunIcon />
            Energia Solar Estimada: {calculateSolarEnergy()} kWh
          </div>
        </div>

        {/* Vertical Divider */}
        <div
          style={{
            width: "2px",
            backgroundColor: "#ccc",
          }}
        ></div>

        {/* Wind Section */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "15px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <EngineSizeWindIcon />
            <label style={{ flex: 1 }}>
              <b>Raio da Turbina (m):</b>
              <input
                type="number"
                value={turbineRadius}
                onChange={(e) => setTurbineRadius(Number(e.target.value))}
                style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px", width: "100%" }}
              />
            </label>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "1.1em" }}>
            <WindIcon />
            Energia Eólica Estimada: {calculateWindEnergy()} MWh
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationResults;
