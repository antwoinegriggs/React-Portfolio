import NavBar from "./NavBar";
import SocialBar from "./SocialBar";
import Logo from "./images/logo";
import React from "react";

export default function Header() {
  return (
    <React.Fragment>
      <SocialBar />
      <Logo />
      <NavBar />
    </React.Fragment>
  );
}
