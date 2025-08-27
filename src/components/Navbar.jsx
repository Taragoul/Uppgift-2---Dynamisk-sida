import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <NavLink to="/" end className="nav-link">
      Home
    </NavLink>
    <NavLink to="/projects" className="nav-link">
      Projects
    </NavLink>
    <NavLink to="/cv" className="nav-link">
      My CV
    </NavLink>
    <NavLink to="/tbd" className="nav-link">
      TBD
    </NavLink>
  </nav>
);

export default Navbar;