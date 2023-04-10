import "./index.css";
import logo from "./images/face-logo.png";
import photo from "./images/sde-photo.jpg";

export default function Landing(props) {
  return (
    <div id="landing">
      <h1 id="title">Software Engingeer</h1>
      <h2 id="sub-title">Antwoine Griggs</h2>
      <img id="face-logo" src={logo} alt="" />
      <img id="sde-photo" src={photo} alt="" />
    </div>
  );
}
