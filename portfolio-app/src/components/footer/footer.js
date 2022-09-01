import SocialBar from "../header/SocialBar.js";
import "./index.css";
import altLogo from "./alt-logo.png";

export default function Footer() {
  return (
    <div id="footer">
      <img id="alt-logo" src={altLogo} alt="" />
      <SocialBar />
      <p id="copyright">
        ©2022 by AG Software Engineer. Proudly create with JavaScript, React,
        HTML, CSS.
      </p>
    </div>
  );
}
