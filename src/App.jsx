import React, { useState } from "react";
import axios from "axios";
import Mapa from "./map";
import SolarChart from "./components/solar-chart";
import WindChart from "./components/wind-chart";
import ResultsSummary from "./components/results-summary";
import SimulationResults from "./components/simulation-results";
import ErrorBoundary from "./components/error-boundary";
import numeral from "numeral";
import {
  calculateTotalSolarEnergy,
  calculateTotalWindEnergy,
  calculateCO2EmissionsAvoided,
  calculatePaybackPeriod,
  divideIntoSeasons,
} from "./helper/simulation";

const App = () => {
  const [simulacao, setSimulacao] = useState(null);
  // variaveis do retorno apróximado de investimento
  const initialInvestmentSolar = 12000; // Initial investment in solar ($)
  const initialInvestmentWind = 15000; // Initial investment in wind turbine ($)
  const energyCostPerKWh = 0.15; // Energy cost from the grid ($/kWh)

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

      // Calculate annual savings
      const annualSolarSavings = totalSolarKWh * energyCostPerKWh;
      const annualWindSavings = totalWindKWh * energyCostPerKWh;
      const totalAnnualSavings = annualSolarSavings + annualWindSavings;

      // Calculate payback periods
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

  console.log("simulacao", simulacao);

  return (
    <div>
      <h1>Renewable Energy Simulation</h1>
      <Mapa onClickMapa={handleMapaClick} />

      {simulacao && (
        <>
          <ResultsSummary
            results={simulacao.results}
            seasonData={simulacao.seasonData}
            solarCO2={simulacao.solarCO2}
            windCO2={simulacao.windCO2}
            paybackSolar={simulacao.paybackSolar}
            paybackWind={simulacao.paybackWind}
          />
          <SimulationResults results={simulacao} />
          <SolarChart solarData={simulacao.solarData} />
          <WindChart windData={simulacao.windData} />
        </>
      )}
    </div>
  );
};

export default App;
