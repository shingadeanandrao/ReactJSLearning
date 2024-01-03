import { NavLink } from "react-router-dom";
import "./customDiv.css";
const CSSConcepts = () => {
  return (
    <>
      <h3> CSS Tutorial </h3>
      <ul type="none" className="list">
        <li>
          <NavLink className="nav-link" to="/CSS/CSSIntro">
            CSS Introduction
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/CSS/CSSSelectors">
            CSS Selectors
          </NavLink>
        </li>
      </ul>
    </>
  );
  }
  export default CSSConcepts;
