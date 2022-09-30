import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Gong-gan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              style={{ color: "black", textDecoration: "none", margin: "5px" }}
            >
              Home
            </Link>

            <Link
              to="/upload"
              style={{ color: "black", textDecoration: "none", margin: "5px" }}
            >
              Upload
            </Link>

            <Link
              to="/"
              style={{ color: "black", textDecoration: "none", margin: "5px" }}
            >
              List
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
