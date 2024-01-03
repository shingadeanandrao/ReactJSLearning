import CSSConcepts from "../CSSConcepts";
import { useNavigate } from "react-router-dom";

const CSSSelectors = () => {

  const navigate = useNavigate();
    const goBack = () => {
      navigate("/CSS/CSSIntro", {replace:true});
    }

      const goForward = () => {
        navigate("/CSS/", {replace:true});
      
    }

  return (
    <>
      <div className="row">
        <div class="col-md-2 customDiv">
          <CSSConcepts />
        </div>
        <div class="col-md-8">
          <h1>CSS Selectors</h1>

          <button type="button" class="btn btn-secondary btn-lg left" onClick={goBack}>Back</button>
          <button type="button" class="btn btn-secondary btn-lg right" onClick={goForward}>Next</button>
          <hr/>
          <p>A CSS selector selects the HTML element(s) you want to style.</p><hr/>

          <h2>CSS Selectors</h2>
          <p>CSS selectors are used to "find" (or select) the HTML elements you want to style.<br/><br/>
          We can divide CSS selectors into five categories:<br/><br/> </p>
          <ul>
            <li>Simple selectors (select elements based on name, id, class)</li>
            <li>Combinator selectors (select elements based on a specific relationship between them)</li>
            <li>Pseudo-class selectors (select elements based on a certain state)</li>
            <li>Pseudo-elements selectors (select and style a part of an element)</li>
            <li>Attribute selectors (select elements based on an attribute or attribute value)</li>
          </ul>
          <p>This page will explain the most basic CSS selectors.</p> <hr/>
          <h2>The CSS element Selector</h2>
          <p>The element selector selects HTML elements based on the element name.</p>

          <h3>Example</h3>
          <p>Here, all {'<p>'} elements on the page will be center-aligned, with a red text color:<br/> <br/>
          <span>{'p {text-align: center;'}</span><br/>
                    <span style={{color:'red'}}>{'color: red;}'}</span></p>
                  
                


            
          <hr/>
    
        
        </div>
      </div>
    </>
  );
};

export default CSSSelectors;