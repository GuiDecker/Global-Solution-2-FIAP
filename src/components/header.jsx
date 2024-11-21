import { AppBar, Toolbar } from "@mui/material";
import logo from "../assets/full-logo-veridis-removebg-enhanced.png";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ height: "80px", backgroundColor: "white", boxShadow: "none", borderBottom: "1px solid #ddd" }}
    >
      <Toolbar sx={{ height: "100%", display: "flex", alignItems: "center", mt: "18px" }}>
        <img src={logo} alt="Logo" style={{ height: "150px", width: "300px", objectFit: "contain" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
