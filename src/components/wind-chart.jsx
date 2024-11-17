import React from "react";
import { Line } from "react-chartjs-2";

const WindChart = ({ windData }) => {
  const labels = Object.keys(windData);
  const values = Object.values(windData);

  const data = {
    labels,
    datasets: [
      {
        label: "Wind Speed (m/s)",
        data: values,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <h3>Wind Energy Simulation</h3>
      <Line data={data} />
    </div>
  );
};

export default WindChart;
