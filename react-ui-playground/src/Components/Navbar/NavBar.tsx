import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./NavBar.css";

const Navbar = () => {
  return (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <Link id="app1" className="menu-item" to="/app1">
        App1
      </Link>
      <Link id="app2" className="menu-item" to="/app2">
        App2
      </Link>
    </Menu>
  );
};

export default Navbar;
