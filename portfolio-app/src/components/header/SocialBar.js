import "./SocialBar.css";
import { socialImages } from "./images/index.js";

export default function SocialBar(props) {
  return (
    <div id="social-bar">
      <a
        href="https://github.com/antwoinegriggs"
        rel="noreferrer"
        target={"_blank"}
      >
        <img src={socialImages.gitHub} alt="github" />
      </a>

      <a
        href="https://www.linkedin.com/in/antwoinegriggs/"
        rel="noreferrer"
        target={"_blank"}
      >
        <img src={socialImages.linkedIn} alt="linkedIn" />
      </a>
      <a
        href="https://twitter.com/Antwoine_G"
        rel="noreferrer"
        target={"_blank"}
      >
        <img src={socialImages.twitter} alt="twitter" />
      </a>
      <a href="https://discord.gg/Ks5SXU7y" rel="noreferrer" target={"_blank"}>
        <img src={socialImages.discord} alt="discord" />
      </a>
    </div>
  );
}
