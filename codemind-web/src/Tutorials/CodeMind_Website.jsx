import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HomePage from "./HomePage";
import HTML from "./HTML";
import JavaScript from "./JavaScript";
import CSSLang from "./CSSLang";
import React from "./React";
import logo from "./logo.jpg";
import ReactIntro from "./React_Tutorial/ReactIntro";
import ReactGetStart from "./React_Tutorial/ReactStart";
import ReactRenderHTML from "./React_Tutorial/ReactRenderHTML";
import ReactJSX from "./React_Tutorial/ReactJSX";
import ReactCompo from "./React_Tutorial/ReactCompo";
import ReactClass from "./React_Tutorial/ReactClass";
import ReactFunctional from "./React_Tutorial/ReactFunctional";
import CSSIntro from "./CSS_Tutorial/CSSIntroduction";
import HTMLIntro from "./HTML_Tutorial/HTMLIntroduction";
import HTMLEditors from "./HTML_Tutorial/HTMLEditors";
import HTMLBasics from "./HTML_Tutorial/HTMLBasics";
import CSSSelectors from "./CSS_Tutorial/CSSSelectors";
import JSIntro from "./JS_Tutorial/JSIntro";


const CodeMind = () => {

  return (
    <>
      <Router>
        <nav class="navbar navbar-expand-lg navigationBar">
          <div class="container-fluid">
          <NavLink className="navbar-brand" to="/">
          <img
              src={logo}
              alt="Logo"
              height={50}
              width={70}
              className="image"
            />
            </NavLink>
            <NavLink className="navbar-brand" to="/">
              <span style={{color:'#ddb9cf'}}>CODEMIND_TECHNOLOGY</span>
            </NavLink>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="navbar-brand">
                <NavLink
                  className="nav-link "
                  to="/HTML"
                >
                  HTML
                </NavLink>
              </li>
              <li class="navbar-brand">
                <NavLink
                  className="nav-link "
                  to="/CSS"
                >
                  CSS
                </NavLink>
              </li>
              <li class="navbar-brand">
                <NavLink className="nav-link" to="/JavaScript">
                  JAVASCRIPT
                </NavLink>
              </li>
              <li class="navbar-brand">
                <NavLink className="nav-link"  to="/React">
                  REACT JS
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route exact path="/HTML" element={<HTML />}></Route>
              <Route exact path="/CSS" element={<CSSLang />}></Route>
              <Route exact path="/JavaScript" element={<JavaScript />}></Route>
              <Route exact path="/React" element={<React />}></Route>
              <Route exact path="/React/Introduction" element={<ReactIntro />}></Route>
              <Route exact path="/React/GetStart" element={<ReactGetStart/>}></Route>
              <Route exact path="/React/ReactRenderHTML" element={<ReactRenderHTML/>}></Route>
              <Route exact path="/React/ReactJSX" element={<ReactJSX/>}></Route>
              <Route exact path="/React/ReactCompo" element={<ReactCompo/>}></Route>
              <Route exact path="/React/ReactClass" element={<ReactClass/>}></Route>
              <Route exact path="/React/ReactFunctional" element={<ReactFunctional/>}></Route>
              <Route exact path="/HTML/HTMLIntro" element={<HTMLIntro/>}></Route>
              <Route exact path="/HTML/HTMLEditors" element={<HTMLEditors/>}></Route>
              <Route exact path="/HTML/HTMLBasics" element={<HTMLBasics/>}></Route>
              <Route exact path="/CSS/CSSIntro" element={<CSSIntro/>}></Route>
              <Route exact path="/CSS/CSSSelectors" element={<CSSSelectors/>}></Route>
              <Route exact path="/JavaScript/JSIntro" element={<JSIntro/>}></Route>
            </Routes>
      </Router>
    </>
  );
};

export default CodeMind;
