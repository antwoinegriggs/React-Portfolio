import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import SocialBar from "./SocialBar";
import Logo from "./images/logo";
import React from "react";

function LogoLink() {
  return (
    <NavLink to="/">
      <Logo />
    </NavLink>
  );
}

export default function Header() {
  return (
    <React.Fragment>
      <SocialBar />
      <LogoLink />
      <NavBar />
    </React.Fragment>
  );
}
