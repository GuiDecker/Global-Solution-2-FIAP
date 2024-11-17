import { Line } from "react-chartjs-2";

const SimulationChart = ({ data }) => {
  const chartData = {
    labels: data.map((point) => point.time),
    datasets: [
      {
        label: "Energia Gerada (kWh)",
        data: data.map((point) => point.output),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default SimulationChart;
