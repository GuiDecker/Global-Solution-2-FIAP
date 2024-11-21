import React from "react";
import numeral from "numeral";
import { Box, Typography, Grid, Divider, Button } from "@mui/material";
import SunIcon from "../assets/icons/solar/sun-icon.jsx";
import TotalEnergySolarIcon from "../assets/icons/solar/total-energy-solar-icon.jsx";
import ReducaoCoSolarIcon from "../assets/icons/solar/reducao-co-solar-icon.jsx";
import PaybackSolarIcon from "../assets/icons/solar/payback-solar-icon.jsx";
import SummerSolarIcon from "../assets/icons/solar/summer-solar-icon.jsx";
import FallSolarIcon from "../assets/icons/solar/fall-solar-icon.jsx";
import WinterSolar from "../assets/icons/solar/winter-solar-icon.jsx";
import SpringSolarIcon from "../assets/icons/solar/spring-solar-icon.jsx";
import PanelefiSolarIcon from "../assets/icons/solar/panelefi-solar-icon.jsx";
import PanelSizeSolarIcon from "../assets/icons/solar/panelsize-solar-icon.jsx";
// ========================
import WindIcon from "../assets/icons/wind/wind-icon.jsx";
import TotalEnergyWindIcon from "../assets/icons/wind/total-energy-wind-icon.jsx";
import ReducaoCoWindIcon from "../assets/icons/wind/reducao-co-wind-icon.jsx";
import PayBackWindIcon from "../assets/icons/wind/payback-wind-icon.jsx";
import SummerWindIcon from "../assets/icons/wind/summer-wind-icon.jsx";
import FallWindIcon from "../assets/icons/wind/fall-wind-icon.jsx";
import WinterWindIcon from "../assets/icons/wind/winter-wind-icon.jsx";
import SpringWindIcon from "../assets/icons/wind/spring-wind-icon.jsx";
import EngineSizeWindIcon from "../assets/icons/wind/enginesize-wind-icon.jsx";
import EngineeficWindIcon from "../assets/icons/wind/engineefic-wind-icon.jsx";

const getSolarSeasonIcon = (season) => {
  switch (season) {
    case "summer":
      return <SummerSolarIcon />;
    case "fall":
      return <FallSolarIcon />;
    case "winter":
      return <WinterSolar />;
    case "spring":
      return <SpringSolarIcon />;
    default:
      return null;
  }
};
const getWindSeasonIcon = (season) => {
  switch (season) {
    case "summer":
      return <SummerWindIcon />;
    case "fall":
      return <FallWindIcon />;
    case "winter":
      return <WinterWindIcon />;
    case "spring":
      return <SpringWindIcon />;
    default:
      return null;
  }
};

const ResultsSummary = ({
  results,
  seasonData,
  solarCO2,
  windCO2,
  paybackSolar,
  paybackWind,
  handleOpenModalChart,
}) => {
  const formattedSolarEnergyWh = numeral(results.totalSolarEnergy).format("0,0");
  const formattedSolarEnergyKWh = numeral(results.totalSolarEnergy / 1000).format("0,0.00");
  const formattedWindEnergyWh = numeral(results.totalWindEnergy).format("0,0");
  const formattedWindEnergyKWh = numeral(results.totalWindEnergy / 1000).format("0,0.00");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* Main Content */}
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
        {/* Solar Section */}
        <Box sx={{ flex: 1, paddingRight: 2 }}>
          <Typography variant="h6" gutterBottom>
            <Box display="flex" alignItems="center">
              <SunIcon sx={{ fontSize: 24 }} />
              <Typography variant="h6" sx={{ ml: 1 }}>
                Energia Solar
              </Typography>
            </Box>
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Box display="flex" alignItems="center">
                <TotalEnergySolarIcon />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  <b>Energia Total:</b> {formattedSolarEnergyWh} Wh ({formattedSolarEnergyKWh} kWh)
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <ReducaoCoSolarIcon />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  <b>Redução de CO₂:</b> {numeral(solarCO2).format("0,0")} kg
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <PaybackSolarIcon />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  <b>Periodo de retorno:</b> {paybackSolar} anos
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Energia por Estação
              </Typography>
              {Object.keys(seasonData).map((season) => (
                <div key={season}>
                  <Box display="flex" alignItems="center">
                    {getSolarSeasonIcon(season)}
                    <Box sx={{ ml: 1, my: 1 }}>
                      <Typography sx={{ fontWeight: "bold" }} variant="body1">
                        {season}
                      </Typography>
                      <Typography variant="body1">
                        <b> Energia Solar:</b> {seasonData[season].solarWh} Wh ({seasonData[season].solarKWh} kWh)
                      </Typography>
                    </Box>
                  </Box>
                </div>
              ))}
              <Button
                variant="contained"
                color="primary"
                sx={{ bgcolor: "#d0d003", color: "white", fontWeight: "bold" }}
                onClick={handleOpenModalChart}
              >
                View Solar Chart
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Vertical Divider */}
        <Divider orientation="vertical" flexItem sx={{ marginX: 2 }} />

        {/* Wind Section */}
        <Box sx={{ flex: 1, paddingLeft: 2 }}>
          <Typography variant="h6" gutterBottom>
            <Box display="flex" alignItems="center">
              <WindIcon />
              <Typography variant="h6" sx={{ ml: 1 }}>
                Energia Eólica
              </Typography>
            </Box>
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Box display="flex" alignItems="center">
                <TotalEnergyWindIcon />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  <b>Energia Total:</b> {formattedWindEnergyWh} Wh ({formattedWindEnergyKWh} kWh)
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <ReducaoCoWindIcon />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  <b>Redução de CO₂:</b> {numeral(windCO2).format("0,0")} kg
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <PayBackWindIcon />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  <b>Periodo de retorno:</b> {paybackWind} anos
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Energia por Estação
              </Typography>
              {Object.keys(seasonData).map((season) => (
                <div key={season}>
                  <Box display="flex" alignItems="center">
                    {getWindSeasonIcon(season)}
                    <Box sx={{ ml: 1, my: 1 }}>
                      <Typography sx={{ fontWeight: "bold" }} variant="body1">
                        {season}
                      </Typography>
                      <Typography variant="body1">
                        <b> Energia Eólica:</b> {seasonData[season].windWh} Wh ({seasonData[season].windKWh} kWh)
                      </Typography>
                    </Box>
                  </Box>
                </div>
              ))}
              <Button
                variant="contained"
                color="primary"
                sx={{ color: "white", fontWeight: "bold" }}
                onClick={handleOpenModalChart}
              >
                View Wind Chart
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Divider sx={{ marginTop: 2 }} />
    </Box>
  );
};

export default ResultsSummary;
