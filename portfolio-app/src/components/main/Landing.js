import "./index.css";
import logo from "./images/face-logo.png";
import photo from "./images/sde-photo.jpg";

export default function Landing(props) {
  return (
    <div id="landing">
      <h2 id="title">Software Engingeer</h2>
      <p id="sub-title">I code things, that's just what I do.</p>
      <img id="face-logo" src={logo} alt="" />
      <img id="sde-photo" src={photo} alt="" />
    </div>
  );
}
