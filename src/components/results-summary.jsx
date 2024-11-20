import React from "react";
import numeral from "numeral";
import { Box, Typography, Grid, Divider } from "@mui/material";
import SunIcon from "../assets/icons/sun-icon.jsx";
import WindIcon from "../assets/icons/wind-icon.jsx";

const ResultsSummary = ({ results, seasonData, solarCO2, windCO2, paybackSolar, paybackWind }) => {
  const formattedSolarEnergyWh = numeral(results.totalSolarEnergy).format("0,0");
  const formattedSolarEnergyKWh = numeral(results.totalSolarEnergy / 1000).format("0,0.00");
  const formattedWindEnergyWh = numeral(results.totalWindEnergy).format("0,0");
  const formattedWindEnergyKWh = numeral(results.totalWindEnergy / 1000).format("0,0.00");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        {/* Solar Section */}
        <Box sx={{ flex: 1, paddingRight: 2 }}>
          <Typography variant="h6" gutterBottom>
            Energia Solar
          </Typography>
          <Divider sx={{ marginBottom: 2 }} /> {/* Divider below the title */}
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Box display="flex" alignItems="center">
                {/* <Brightness7Icon sx={{ fontSize: 24 }} /> */}
                <SunIcon />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Energia Total: {formattedSolarEnergyWh} Wh ({formattedSolarEnergyKWh} kWh)
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Redução de CO₂: {numeral(solarCO2).format("0,0")} kg
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Payback Period: {paybackSolar} anos
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Energia por Estação
              </Typography>
              {Object.keys(seasonData).map((season) => (
                <div key={season}>
                  <Typography variant="body2">{season}</Typography>
                  <Typography variant="body2">
                    Energia Solar: {seasonData[season].solarWh} Wh ({seasonData[season].solarKWh} kWh)
                  </Typography>
                </div>
              ))}
            </Grid>
          </Grid>
        </Box>

        {/* Vertical Divider */}
        <Divider orientation="vertical" flexItem sx={{ marginX: 2 }} />

        {/* Wind Section */}
        <Box sx={{ flex: 1, paddingLeft: 2 }}>
          <Typography variant="h6" gutterBottom>
            Energia Eólica
          </Typography>
          <Divider sx={{ marginBottom: 2 }} /> {/* Divider below the title */}
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Box display="flex" alignItems="center">
                {/* <AirIcon sx={{ fontSize: 24 }} /> */}
                <WindIcon />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Energia Total: {formattedWindEnergyWh} Wh ({formattedWindEnergyKWh} kWh)
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Redução de CO₂: {numeral(windCO2).format("0,0")} kg
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Payback Period: {paybackWind} anos
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Energia por Estação
              </Typography>
              {Object.keys(seasonData).map((season) => (
                <div key={season}>
                  <Typography variant="body2">{season}</Typography>
                  <Typography variant="body2">
                    Energia Eólica: {seasonData[season].windWh} Wh ({seasonData[season].windKWh} kWh)
                  </Typography>
                </div>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Horizontal Divider */}
      <Divider sx={{ marginTop: 2 }} />
    </Box>
  );
};

export default ResultsSummary;
