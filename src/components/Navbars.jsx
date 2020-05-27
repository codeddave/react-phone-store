import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand>
        <Link to="/" className="navbar-brand">
          <h3 className="tech">
            TechPlug<i className="fas plug fa-plug"></i>
          </h3>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/">
            Products
          </Link>

          <Link to="/cart" className="nav-link">
            <button className="cartbtn">
              <i className="fas cart fa-cart-plus"></i>
              Cart
            </button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
