import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Offcanvas,
  Container,
  CloseButton,
} from "react-bootstrap";
import { Link } from "react-scroll";

function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => setMenuOpen(false);
  return (
    <>
      <Navbar
        collapseOnSelect="true"
        expand="md"
        variant="dark"
        className="w-100 lg Header sticky-top"
      >
        <Container fluid>
          <Navbar.Brand className="px-2">Nagy Norbert</Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-md`}
            onClick={toggleMenu}
          />
          <Navbar.Offcanvas
            responsive="md"
            className="offcanvas-md"
            id={`offcanvasNavbar-expand-md `}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            restoreFocus={false}
            show={menuOpen}
            onHide={handleClose}
          >
            <Offcanvas.Header>
              <CloseButton variant="white" onClick={handleClose} />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="align-items-end flex-grow-1 pe-3">
                <Link
                  className="mx-2 text-decoration-none"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={200}
                  onClick={handleClose}
                >
                  Home
                </Link>
                <Link
                  className="mx-2 text-decoration-none"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={200}
                  onClick={handleClose}
                >
                  About
                </Link>
                <Link
                  className="mx-2 text-decoration-none"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={200}
                  onClick={handleClose}
                >
                  Projects
                </Link>
                <Link
                  className="mx-2 text-decoration-none"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={200}
                  onClick={handleClose}
                >
                  Contact
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
