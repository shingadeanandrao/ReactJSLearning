import ReactConcepts from "../ReactConcepts";
import { useNavigate } from "react-router-dom";

const ReactFunctional = () => {

  const navigate = useNavigate();
    const goBack = () => {
      navigate("/React/ReactClass", {replace:true});
    }

      const goForward = () => {
        navigate("/React/ReactFunctional", {replace:true});
      
    }

  return (
    <>
      <div className="row">
        <div class="col-md-2 customDiv">
          <ReactConcepts />
        </div>
        <div class="col-md-8">
          <h1>React Functional Components</h1>

          <button type="button" class="btn btn-secondary btn-lg left" onClick={goBack}>Back</button>
          <button type="button" class="btn btn-secondary btn-lg right" onClick={goForward}>Next</button>
          <hr/>
          <p>A Function component also returns HTML, and behaves much the same way as a Class component, but<br/> Function components can be written using much less code, are easier to understand, and will be preferred <br/>in this tutorial.<br/></p>
          <hr/>
        
        </div>
      </div>
    </>
  );
};

export default ReactFunctional;