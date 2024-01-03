import ReactConcepts from "../ReactConcepts";
import { useNavigate } from "react-router-dom";

const ReactClass = () => {

  const navigate = useNavigate();
    const goBack = () => {
      navigate("/React/ReactCompo", {replace:true});
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
          <h1>React Class Components</h1>

          <button type="button" class="btn btn-secondary btn-lg left" onClick={goBack}>Back</button>
          <button type="button" class="btn btn-secondary btn-lg right" onClick={goForward}>Next</button>
          <hr/>
          <p>Before React 16.8, Class components were the only way to track state and lifecycle on a React<br/> component. Function components were considered "state-less".<br/><br/>
With the addition of Hooks, Function components are now almost equivalent to Class components. The<br/>differences are so minor that you will probably never need to use a Class component in React.<br/>
Even though Function components are preferred, there are no current plans on removing Class <br/>components from React.<br/>

This section will give you an overview of how to use Class components in React.<br/> <mark>Feel free to skip this section, and use Function Components instead.</mark></p>
          <hr/>
          <h2>Create a Class Component</h2>

          <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript <br/> functions, but work in isolation and return HTML.</p>
 
          <p>The component has to include the<mark> extends React.Component </mark> statement, this statement creates an <br/>inheritance to React.Component, and gives your component access to React.Component's functions.<br/> <br/>

            The component also requires a <mark>render()</mark> method, this method returns HTML.</p>  


          
        </div>
      </div>
    </>
  );
};

export default ReactClass;