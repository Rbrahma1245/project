import { Component } from "react";
import "./Header.scss";

import logo from "../../Images/logo.jpg";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header-container" style={{ display: "flex" }}>
        <div className="header-left">
          <img src={logo} alt="logo" />
          <NavLink to="/" className="link">
            HOME
          </NavLink>
          <NavLink to="/product" className="link">
            PRODUCTS
          </NavLink>
          <NavLink to="/about" className="link">
            ABOUT
          </NavLink>
        </div>

        <div className="header-right">
          <NavLink to="/login" className="link">
            LOGIN
          </NavLink>
          <NavLink to="/signup" className="link">
            SIGNUP
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
