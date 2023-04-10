import { NavLink } from "react-router-dom";
import "./index.css";

export default function NavBar(props) {
  return (
    <div id="nav-bar">
      <NavLink to="/contact">
        <button type="button" id="btn-contact">
          Contact Me
        </button>
      </NavLink>

      <a id="resume-link" href="./images/resume.pdf" download>
        Resume
      </a>
    </div>
  );
}
