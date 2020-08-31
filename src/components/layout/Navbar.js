import React from "react";
import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import "./css/Navbar.css";

const Navbar = props => {
  return (
    <nav
      className="navbar navbar-expand-sm bg-light pb-2"
      style={{ backgroundColor: '#style={{ color: "#D81159" }}' }}
    >
      <div className="container-xl">
        <Link to="/">
          <strong className="navbar-brand logo" style={{ color: "#D81159" }}>
            <h2>GURUDAKSHINA</h2>
          </strong>
        </Link>
        <NavbarLinks />
      </div>
    </nav>
  );
};

export default Navbar;
