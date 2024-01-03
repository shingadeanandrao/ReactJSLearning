import ReactConcepts from "../ReactConcepts";
import { useNavigate } from "react-router-dom";

const ReactCompo = () => {

  const navigate = useNavigate();
    const goBack = () => {
      navigate("/React/ReactJSX", {replace:true});
    }

      const goForward = () => {
        navigate("/React/ReactClass", {replace:true});
      
    }

  return (
    <>
      <div className="row">
        <div class="col-md-2 customDiv">
          <ReactConcepts />
        </div>
        <div class="col-md-8">
          <h1>React Components</h1>

          <button type="button" class="btn btn-secondary btn-lg left" onClick={goBack}>Back</button>
          <button type="button" class="btn btn-secondary btn-lg right" onClick={goForward}>Next</button>
          <hr/>
          <p>Components are like functions that return HTML elements.</p>
          <hr/>
          <h2>React Components</h2>

          <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript <br/> functions, but work in isolation and return HTML.</p>
          <p>Components come in two types, Class components and Function components, in this tutorial we will <br/> concentrate on Function components.</p>
          <hr/>
          <h2>Create Your First Component</h2>

          <p>When creating a React component, the component's name MUST start with an upper case letter.</p>        
          
        </div>
      </div>
    </>
  );
};

export default ReactCompo;