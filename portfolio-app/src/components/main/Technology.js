import "./Technology.css";
import { techImages } from "./images/index.js";

export default function Technology(props) {
  return (
    <div id="technology">
      <h2 id="tech-title">Technologies </h2>
      <div id="tech-images">
        <img src={techImages.javaScriptImage} alt="javaScript" />
        <img src={techImages.reactImage} alt="react" />
        <img src={techImages.htmlImage} alt="html 5" />
        <img src={techImages.cssImage} alt="css 3" />
      </div>
    </div>
  );
}
