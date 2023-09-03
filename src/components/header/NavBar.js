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

      <a
        id="resume-link"
        href="https://docs.google.com/document/d/1Lc75dgFupBPBLpQlXfwWUufb2cwNn3FKLBDWEp52_R0/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </div>
  );
}
