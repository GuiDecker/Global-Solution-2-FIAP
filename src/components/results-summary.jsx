import React from "react";
import numeral from "numeral";

const ResultsSummary = ({ results, seasonData, solarCO2, windCO2, paybackSolar, paybackWind }) => {
  const formattedSolarEnergyWh = numeral(results.totalSolarEnergy).format("0,0");
  const formattedSolarEnergyKWh = numeral(results.totalSolarEnergy / 1000).format("0,0.00");
  const formattedWindEnergyWh = numeral(results.totalWindEnergy).format("0,0");
  const formattedWindEnergyKWh = numeral(results.totalWindEnergy / 1000).format("0,0.00");

  return (
    <div>
      <h2>Resultados da Simulação</h2>
      <p>
        <strong>Energia Solar Total:</strong> {formattedSolarEnergyWh} Wh ({formattedSolarEnergyKWh} kWh)
      </p>
      <p>
        <strong>Energia Eólica Total:</strong> {formattedWindEnergyWh} Wh ({formattedWindEnergyKWh} kWh)
      </p>

      <h3>Redução de Emissões de CO₂</h3>
      <p>
        <strong>CO₂ evitado com energia solar:</strong> {numeral(solarCO2).format("0,0")} kg
      </p>
      <p>
        <strong>CO₂ evitado com energia eólica:</strong> {numeral(windCO2).format("0,0")} kg
      </p>

      <h3>Payback Period</h3>
      <p>
        <strong>Tempo de retorno do investimento Solar:</strong> {paybackSolar} anos
      </p>
      <p>
        <strong>Tempo de retorno do investimento Eólico:</strong> {paybackWind} anos
      </p>

      <h3>Energia por Estação</h3>
      {Object.keys(seasonData).map((season) => (
        <div key={season}>
          <h4>{season.charAt(0).toUpperCase() + season.slice(1)}</h4>
          <p>
            <strong>Energia Solar:</strong> {seasonData[season].solarWh} Wh ({seasonData[season].solarKWh} kWh)
          </p>
          <p>
            <strong>Energia Eólica:</strong> {seasonData[season].windWh} Wh ({seasonData[season].windKWh} kWh)
          </p>
        </div>
      ))}
    </div>
  );
};

export default ResultsSummary;
