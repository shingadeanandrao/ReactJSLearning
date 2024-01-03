import ReactConcepts from "../ReactConcepts";
import { useNavigate } from "react-router-dom";
const ReactGetStart = () => 
  {
    const navigate = useNavigate();
    const goBack = () => {
      navigate("/React/Introduction", {replace:true});
    }

      const goForward = () => {
        navigate("/React/ReactRenderHTML", {replace:true});
      
    }
  return (
    <>
      <div className="row">
        <div class="col-md-2 customDiv">
          <ReactConcepts />
        </div>
        <div class="col-md-8  ">
          <h1>React Getting Started</h1>

          <button type="button" class="btn btn-secondary btn-lg left" onClick={goBack}>Back</button>
          <button type="button" class="btn btn-secondary btn-lg right" onClick={goForward}>Next</button>
          
          <p>
          To get an overview of what React is, you can write React code directly in HTML.

          But in order to use React in production, you need npm and Node.js installed.
          </p>
          <h3>React Directly in HTML</h3>
          <p>The quickest way start learning React is to write React directly in your HTML files.</p>
          <p>Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.</p>
        </div>
      </div>
    </>
  );
};

export default ReactGetStart;