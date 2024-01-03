import ReactConcepts from "../ReactConcepts";
import { useNavigate } from "react-router-dom";
const ReactJSX = () => {

  const navigate = useNavigate();
    const goBack = () => {
      navigate("/React/ReactRenderHTML", {replace:true});
    }

      const goForward = () => {
        navigate("/React/ReactCompo", {replace:true});
      
    }

  return (
    <>
      <div className="row">
        <div class="col-md-2 customDiv">
          <ReactConcepts />
        </div>
        <div class="col-md-8">
          <h1>React JSX</h1>

          <button type="button" class="btn btn-secondary btn-lg left" onClick={goBack}>Back</button>
          <button type="button" class="btn btn-secondary btn-lg right" onClick={goForward}>Next</button>
          <hr/>
          <h2>What is JSX?</h2>
        
          <p>JSX stands for JavaScript XML.</p>
          <p>JSX allows us to write HTML in React.</p>
          <p>JSX makes it easier to write and add HTML in React.</p>
          <hr/>
          <h2>Coding JSX</h2>
          <p>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any <mark>createElement()</mark> and/or <mark> appendChild() </mark> methods.</p>
          <p>JSX converts HTML tags into react elements.</p>
          <hr/>
          
        </div>
      </div>
    </>
  );
};

export default ReactJSX;