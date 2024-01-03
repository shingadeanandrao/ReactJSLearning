import { NavLink } from "react-router-dom";
import "./customDiv.css";
const ReactConcepts = () => {
  return (
    <>
      <h3> React JS Tutorial </h3>
      <ul type="none" className="list">
        <li>
          <NavLink className="nav-link" to="/React/Introduction">
            React Introduction
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/GetStart">
            React Get Started
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/ReactRenderHTML">
          React Render HTML
          </NavLink>
          </li>
        <li>
          <NavLink className="nav-link" to="/React/ReactJSX">
          React JSX
          </NavLink>
          </li>
        <li> 
        <NavLink className="nav-link" to="/React/ReactCompo">
         React Components
        </NavLink>
        </li>
        <li>
        <NavLink className="nav-link" to="/React/ReactClass">
         React Class
        </NavLink>
        </li>
        <li><NavLink className="nav-link" to="/React/ReactFunctional">
         React Functional Components
        </NavLink>
        </li>
      </ul>
    </>
  );
};

export default ReactConcepts;
