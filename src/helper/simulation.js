const simulateEnergy = (solarData, windData) => {
  // Constants
  const panelArea = 10; // m²
  const panelEfficiency = 0.15; // 15%

  const rotorRadius = 2; // m
  const turbineEfficiency = 0.4; // 40%
  const airDensity = 1.225; // kg/m³
  const rotorArea = Math.PI * Math.pow(rotorRadius, 2); // Area of wind rotor

  let totalSolarEnergy = 0; // Wh
  let totalWindEnergy = 0; // Wh

  for (const hour in solarData) {
    // Solar Energy Simulation
    const solarIrradiance = solarData[hour]; // Wh/m²
    const solarEnergy = solarIrradiance * panelArea * panelEfficiency;
    totalSolarEnergy += solarEnergy;

    // Wind Energy Simulation
    const windSpeed = windData[hour]; // m/s
    const windPower = 0.5 * airDensity * rotorArea * Math.pow(windSpeed, 3) * turbineEfficiency; // Power in W
    const windEnergy = windPower; // Since it's for 1 hour, Energy (Wh) = Power (W) * 1 hour
    totalWindEnergy += windEnergy;
  }

  return {
    totalSolarEnergy, // Total Solar Energy in Wh
    totalWindEnergy, // Total Wind Energy in Wh
  };
};

// Sample JSON Data
const solarData = {
  2023010100: 0,
  2023010101: 0,
  2023010102: 0,
  2023010103: 0,
  2023010104: 0,
  2023010105: 13.71,
  2023010106: 112.81,
  // Add the rest...
  2023010111: 596.73,
  2023010112: 584.34,
};

const windData = {
  2023010100: 4.51,
  2023010101: 4.28,
  2023010102: 4.48,
  2023010103: 4.45,
  2023010104: 4.26,
  2023010105: 4.17,
  // Add the rest...
  2023010111: 3.09,
  2023010112: 2.79,
};

const results = simulateEnergy(solarData, windData);

console.log("Total Solar Energy Generated:", results.totalSolarEnergy, "Wh");
console.log("Total Wind Energy Generated:", results.totalWindEnergy, "Wh");
