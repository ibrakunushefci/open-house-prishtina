import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const AppNavbar = () => (
   <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mr-auto">
            <Link to="#" className="nav-link">Projects</Link>
            <Link to="#" className="nav-link">Services</Link>
            <Link to="#" className="nav-link">About</Link>
            <Link to="/news" className="nav-link">News</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
         </Nav>
      </Navbar.Collapse>
   </Navbar>
)

export default AppNavbar;