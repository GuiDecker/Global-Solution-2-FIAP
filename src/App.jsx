import { Outlet } from "react-router-dom";
import FooterNavigation from "./components/footer-navigation";

function App() {
  return (
    <>
      <Outlet />
      <FooterNavigation />
    </>
  );
}

export default App;
