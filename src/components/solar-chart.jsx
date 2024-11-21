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
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const SolarChart = ({ solarData, onClose }) => {
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
    <Box style={{ margin: "20px 0" }}>
      <Box
        p={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Typography variant="h6">Média energia solar da região</Typography>
        <IconButton onClick={onClose} sx={{ color: "#000" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Line data={data} />
    </Box>
  );
};

export default SolarChart;
