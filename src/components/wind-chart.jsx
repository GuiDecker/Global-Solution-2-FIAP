import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Line } from "react-chartjs-2";

const WindChart = ({ windData, onClose }) => {
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
        <Typography variant="h6">Média energia eólica da região</Typography>
        <IconButton onClick={onClose} sx={{ color: "#000" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Line data={data} />
    </Box>
  );
};

export default WindChart;
