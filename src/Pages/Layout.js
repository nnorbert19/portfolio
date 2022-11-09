import NavbarComponent from "../Components/NavbarComponent";
import { Outlet } from "react-router-dom";
import FooterComponent from "../Components/FooterComponent";

function Layout() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default Layout;
