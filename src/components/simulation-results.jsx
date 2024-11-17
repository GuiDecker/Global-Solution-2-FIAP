import React, { useState } from "react";

const SimulationResults = ({ solarData, windData }) => {
  const [panelArea, setPanelArea] = useState(30); // in m²
  const [efficiency, setEfficiency] = useState(0.2); // 20%
  const [turbineRadius, setTurbineRadius] = useState(20); // 20m
  const airDensity = 1.225; // kg/m³ (valor constante por enquanto)

  const calculateSolarEnergy = () => {
    if (!solarData || Object.keys(solarData).length === 0) {
      return "Nenhum dado disponível";
    }

    const energyKWh = Object.values(solarData).reduce((total, irradiance) => {
      return total + (irradiance * panelArea * efficiency) / 1000;
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

  return (
    <div>
      <h3>Simulation Results</h3>
      <div>
        <label>
          Panel Area (m²):
          <input type="number" value={panelArea} onChange={(e) => setPanelArea(Number(e.target.value))} />
        </label>
        <label>
          Efficiency (%):
          <input type="number" value={efficiency * 100} onChange={(e) => setEfficiency(Number(e.target.value)) / 100} />
        </label>
      </div>
      <p>Estimated Solar Energy: {calculateSolarEnergy()} kWh</p>

      <div>
        <label>
          Turbine Radius (m):
          <input type="number" value={turbineRadius} onChange={(e) => setTurbineRadius(Number(e.target.value))} />
        </label>
      </div>
      <p>Estimated Wind Energy: {calculateWindEnergy()} MWh</p>
    </div>
  );
};

export default SimulationResults;
