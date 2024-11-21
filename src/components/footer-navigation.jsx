import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import logo from "../assets/full-logo-veridis-removebg-enhanced.png";
import LampIcon from "../assets/icons/lamp-icon.jsx";
import HomeIcon from "../assets/icons/home-icon.jsx";
import FaqIcon from "../assets/icons/faq-icon.jsx";

const FooterNavigation = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 50,
        left: 50,
        width: "100%",
        maxWidth: "600px",
        borderRadius: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px 10px 0px",
        background: "rgba(255, 255, 255, 0.3)",
        boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    >
      <Box sx={{ marginLeft: "-40px", marginBottom: "-20px" }}>
        <img src={logo} alt="Logo" style={{ height: "100px", width: "300px", objectFit: "contain" }} />
      </Box>

      <Box sx={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#00d97e" }}>
          <Box
            sx={{
              display: "flex",
              width: "80px",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              gap: 1,
              borderRadius: 2,
              padding: 1,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HomeIcon />
            </Box>
            <Typography sx={{ fontSize: "13.5px" }}>Home</Typography>
          </Box>
        </Link>

        <Link to="/energy-simulation" style={{ textDecoration: "none", color: "#00d97e" }}>
          <Box
            sx={{
              display: "flex",
              width: "80px",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              gap: 1,
              borderRadius: 2,
              padding: 1,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LampIcon height={40} width={40} />
            </Box>
            <Typography sx={{ fontSize: "13.5px" }}>Simulador</Typography>
          </Box>
        </Link>

        <Link to="/faq" style={{ textDecoration: "none", color: "#00d97e" }}>
          <Box
            sx={{
              display: "flex",
              width: "80px",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              gap: 1,
              borderRadius: 2,
              padding: 1,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaqIcon />
            </Box>
            <Typography sx={{ fontSize: "13.5px" }}>Faq</Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default FooterNavigation;
