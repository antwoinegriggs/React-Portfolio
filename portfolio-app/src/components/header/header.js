import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import SocialBar from "./SocialBar";
import Logo from "./images/logo";
import React from "react";

export default function Header() {
  return (
    <React.Fragment>
      <SocialBar />
      <NavLink to="/">
        <Logo />
      </NavLink>
      <NavBar />
    </React.Fragment>
  );
}
