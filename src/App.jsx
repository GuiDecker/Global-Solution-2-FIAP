import React, { useState } from "react";
import axios from "axios";
import Mapa from "./map";
import SolarChart from "./components/solar-chart";
import WindChart from "./components/wind-chart";
import ResultsSummary from "./components/results-summary";
import SimulationResults from "./components/simulation-results";
import ErrorBoundary from "./components/error-boundary";
import numeral from "numeral";

// Fixed constants
const solarPanelArea = 10; // m^2
const solarEfficiency = 0.2; // 20% efficiency
const turbineArea = 15; // m^2 for turbine
const airDensity = 1.225; // kg/m^3
const coalCO2EmissionFactor = 0.9; // kg CO2/kWh for coal-fired plants
const gasCO2EmissionFactor = 0.4; // kg CO2/kWh for gas-fired plants

// Financial Constants
const initialInvestmentSolar = 12000; // Initial investment in solar ($)
const initialInvestmentWind = 15000; // Initial investment in wind turbine ($)
const energyCostPerKWh = 0.15; // Energy cost from the grid ($/kWh)

const calculateTotalSolarEnergy = (solarData) => {
  let totalSolarEnergy = 0; // in Wh
  for (let time in solarData) {
    totalSolarEnergy += solarData[time]; // Wh/m^2
  }
  totalSolarEnergy *= solarPanelArea * solarEfficiency; // Total in Wh
  return totalSolarEnergy.toFixed(2);
};

const calculateTotalWindEnergy = (windData) => {
  let totalWindEnergy = 0; // in Wh
  for (let time in windData) {
    let windSpeed = windData[time]; // m/s
    let power = 0.5 * airDensity * turbineArea * Math.pow(windSpeed, 3); // Power in W
    totalWindEnergy += power / 1000; // Convert W to kW for Wh (1 hour)
  }
  return (totalWindEnergy * 24).toFixed(2); // Convert to Wh for the whole day
};

const divideIntoSeasons = (solarData, windData) => {
  const seasons = {
    summer: { solar: 0, wind: 0 },
    fall: { solar: 0, wind: 0 },
    winter: { solar: 0, wind: 0 },
    spring: { solar: 0, wind: 0 },
  };

  const getSeason = (date) => {
    const month = date.getMonth() + 1; // Get the month (1-based)
    const day = date.getDate();

    if ((month === 12 && day >= 21) || (month >= 1 && month <= 3) || (month === 3 && day <= 20)) {
      return "summer";
    } else if ((month >= 3 && month <= 6) || (month === 6 && day <= 20)) {
      return "fall";
    } else if ((month >= 6 && month <= 9) || (month === 9 && day <= 22)) {
      return "winter";
    } else {
      return "spring";
    }
  };

  for (let time in solarData) {
    const date = new Date(time.substr(0, 4), parseInt(time.substr(4, 2)) - 1, time.substr(6, 2), time.substr(8, 2)); // Construct Date object
    const season = getSeason(date);

    seasons[season].solar += solarData[time];
    seasons[season].wind += windData[time];
  }

  const formattedSeasons = {};
  for (let season in seasons) {
    formattedSeasons[season] = {
      solarWh: seasons[season].solar.toFixed(2),
      windWh: seasons[season].wind.toFixed(2),
      solarKWh: (seasons[season].solar / 1000).toFixed(2),
      windKWh: (seasons[season].wind / 1000).toFixed(2),
    };
  }

  return formattedSeasons;
};

const calculateCO2EmissionsAvoided = (solarEnergyKWh, windEnergyKWh) => {
  const solarCO2 = (solarEnergyKWh * coalCO2EmissionFactor).toFixed(2);
  const windCO2 = (windEnergyKWh * gasCO2EmissionFactor).toFixed(2);
  return { solarCO2, windCO2 };
};

// Function to calculate payback period
const calculatePaybackPeriod = (initialInvestment, annualSavings) => {
  const paybackPeriod = (initialInvestment / annualSavings).toFixed(2); // in years
  return paybackPeriod;
};

const App = () => {
  const [simulacao, setSimulacao] = useState(null);

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
