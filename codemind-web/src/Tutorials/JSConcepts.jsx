import { NavLink } from "react-router-dom";
import "./customDiv.css";
const JSConcepts = () => {
  return (
    <>
      <h3> JavaScript Tutorial </h3>
      <ul type="none" className="list">
        <li>
          <NavLink className="nav-link" to="/JavaScript/JSIntro">
            JavaScript Introduction
          </NavLink>
        </li>
       
      </ul>
    </>
  );
  }
  export default JSConcepts;
