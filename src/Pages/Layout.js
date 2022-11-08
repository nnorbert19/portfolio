import NavbarComponent from "../Components/NavbarComponent";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavbarComponent />
      <Outlet className="content" />
    </>
  );
}

export default Layout;
