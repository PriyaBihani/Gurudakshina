import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SubscriptionForm from "../newsLetter/subscriptionForm";

class NavbarLinks extends Component {
  render() {
    return (
      <div className="float-right" style={{ color: "#72DDF7" }}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" exact={true} className="nav-link" activeStyle={{ color: 'red' }}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/donate" activeStyle={{ color: 'red' }} className="nav-link ">
              Donate
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/help" activeStyle={{ color: 'red' }} className="nav-link">
              Need Help
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/helpseekers" activeStyle={{ color: 'red' }} className="nav-link">
              HelpSeekers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" activeStyle={{ color: 'red' }} className="nav-link ">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <SubscriptionForm />
          </li>
        </ul>
      </div>
    );
  }
}

export default NavbarLinks;
