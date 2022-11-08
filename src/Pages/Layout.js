import NavbarComponent from "../Components/NavbarComponent";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
}

export default Layout;
