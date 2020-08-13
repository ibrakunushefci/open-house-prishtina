import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

import './Navbar.styles.scss';

const AppNavbar = () => (
   <Navbar className="navbar-dark" expand="sm">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mr-auto">
            <NavLink to="/projects" activeClassName="selected" className="nav-link">Projects</NavLink>
            <NavLink to="/services" activeClassName="selected" className="nav-link">Services</NavLink>
            <NavLink to="/about" activeClassName="selected" className="nav-link">About</NavLink>
            <NavLink to="/" activeClassName="selected" className="nav-link">News</NavLink>
            <NavLink to="/contact" activeClassName="selected" className="nav-link">Contact</NavLink>
         </Nav>
      </Navbar.Collapse>
   </Navbar>
)

export default AppNavbar;