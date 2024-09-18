import React from "react";
import { Link, NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./NavBar.css";
import { MenuLink } from "./NavBarStyles";

const Navbar = () => {
  return (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <MenuLink id="app1" className="menu-item" to="/app1">
        App1
      </MenuLink>
      <MenuLink id="app2" className="menu-item" to="/app2">
        App2
      </MenuLink>
      <MenuLink id="app2" className="menu-item" to="/datagrid">
        Mui DataGrid
      </MenuLink>
    </Menu>
  );
};

export default Navbar;
