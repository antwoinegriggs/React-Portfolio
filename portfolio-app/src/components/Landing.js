import "./Landing.css";
import logo from "./face-logo.png";
import photo from "./sde-photo.jpg";

function Landing() {
  return (
    <div id="landing">
      <h2 id="title">Software Engingeer</h2>
      <p id="sub-title">I code things, that's just what I do.</p>
      <img id="face-logo" src={logo} alt="" />
      <img id="sde-photo" src={photo} alt="" />
    </div>
  );
}

export default Landing;
