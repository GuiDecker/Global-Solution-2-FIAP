import { Outlet } from "react-router-dom";
import FooterNavigation from "./components/footer-navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Outlet />
      <FooterNavigation />
    </>
  );
}

export default App;
