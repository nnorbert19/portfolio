import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Offcanvas,
  Container,
  CloseButton,
} from "react-bootstrap";

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
                <Nav.Link className="mx-2" href="#home" onClick={handleClose}>
                  Home
                </Nav.Link>
                <Nav.Link className="mx-2 " href="#about" onClick={handleClose}>
                  About
                </Nav.Link>
                <Nav.Link
                  className="mx-2"
                  href="#projects"
                  onClick={handleClose}
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  className="mx-2"
                  href="#contact"
                  onClick={handleClose}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
