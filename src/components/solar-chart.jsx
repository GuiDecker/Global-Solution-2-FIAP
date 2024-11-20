import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x-axis
  LinearScale, // y-axis
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const SolarChart = ({ solarData }) => {
  const labels = Object.keys(solarData); // Time labels
  const values = Object.values(solarData); // Energy values

  const data = {
    labels,
    datasets: [
      {
        label: "Solar Irradiance (Wh/m²)",
        data: values,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <h3>Solar Energy Simulation</h3>
      <Line data={data} />
    </div>
  );
};

export default SolarChart;
