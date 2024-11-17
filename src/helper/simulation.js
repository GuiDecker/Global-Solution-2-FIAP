// Fixed constants
const solarPanelArea = 10; // m^2
const solarEfficiency = 0.2; // 20% efficiency
const turbineArea = 15; // m^2 for turbine
const airDensity = 1.225; // kg/m^3
const coalCO2EmissionFactor = 0.9; // kg CO2/kWh for coal-fired plants
const gasCO2EmissionFactor = 0.4; // kg CO2/kWh for gas-fired plants

export const calculateTotalSolarEnergy = (solarData) => {
  let totalSolarEnergy = 0; // in Wh
  for (let time in solarData) {
    totalSolarEnergy += solarData[time]; // Wh/m^2
  }
  totalSolarEnergy *= solarPanelArea * solarEfficiency; // Total in Wh
  return totalSolarEnergy.toFixed(2);
};

export const calculateTotalWindEnergy = (windData) => {
  let totalWindEnergy = 0; // in Wh
  for (let time in windData) {
    let windSpeed = windData[time]; // m/s
    let power = 0.5 * airDensity * turbineArea * Math.pow(windSpeed, 3); // Power in W
    totalWindEnergy += power / 1000; // Convert W to kW for Wh (1 hour)
  }
  return (totalWindEnergy * 24).toFixed(2); // Convert to Wh for the whole day
};

export const divideIntoSeasons = (solarData, windData) => {
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

export const calculateCO2EmissionsAvoided = (solarEnergyKWh, windEnergyKWh) => {
  const solarCO2 = (solarEnergyKWh * coalCO2EmissionFactor).toFixed(2);
  const windCO2 = (windEnergyKWh * gasCO2EmissionFactor).toFixed(2);
  return { solarCO2, windCO2 };
};

// Function to calculate payback period
export const calculatePaybackPeriod = (initialInvestment, annualSavings) => {
  const paybackPeriod = (initialInvestment / annualSavings).toFixed(2); // in years
  return paybackPeriod;
};
