import SocialBar from "../header/SocialBar.js";
import "./index.css";
import AltLogo from "./alt-logo.js";

export default function Footer() {
  return (
    <div id="footer">
      <img src={AltLogo} alt="" />
      <SocialBar />
      <p>
        ©2022 by AG Software Engineer. Proudly create with JavaScript, React,
        HTML, CSS.
      </p>
    </div>
  );
}
