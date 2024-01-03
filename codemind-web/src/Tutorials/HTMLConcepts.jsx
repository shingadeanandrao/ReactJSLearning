import { NavLink } from "react-router-dom";
import "./customDiv.css";
const HTMLConcepts = () => {
  return (
    <>
      <h3> HTML Tutorial </h3>
      <ul type="none" className="list">
        <li>
          <NavLink className="nav-link" to="/HTML/HTMLIntro">
            HTML Introduction
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/HTML/HTMLEditors">
            HTML Editors
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/HTML/HTMLBasics">
            HTML Basics
          </NavLink>
        </li>
      </ul>
    </>
  );
  }
  export default HTMLConcepts;
