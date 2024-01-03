import ReactConcepts from "../ReactConcepts";
import renderImg from "./Untitled.jpg";
import { useNavigate } from "react-router-dom";
const ReactRenderHTML = () => {

  const navigate = useNavigate();
    const goBack = () => {
      navigate("/React/GetStart", {replace:true});
    }

      const goForward = () => {
        navigate("/React/ReactJSX", {replace:true});
      
    }

  return (
    <>
      <div className="row">
        <div class="col-md-2 customDiv">
          <ReactConcepts />
        </div>
        <div class="col-md-8">
          <h1>React Render HTML</h1>

          <button type="button" class="btn btn-secondary btn-lg left" onClick={goBack}>Back</button>
          <button type="button" class="btn btn-secondary btn-lg right" onClick={goForward}>Next</button>

          <p>React's goal is in many ways to render HTML in a web page.</p>
          <p>React renders HTML to the web page by using a function called <mark>createRoot()</mark> and its method <mark>render()</mark>.</p>
          <hr/>
          <h2>The createRoot Function</h2>
          <p>The <mark>createRoot()</mark> function takes one argument, an HTML element.</p>
          <p>The purpose of the function is to define the HTML element where a React component should be displayed.</p>
          <hr/>
          <h2>The render Method</h2>
          <p>The <mark>render()</mark> method is then called to define the React component that should be rendered.</p>

        <p>But render where?</p>

<p>There is another folder in the root directory of your React project, named "public". In this folder, there is an <mark>index.html</mark> file.</p>

<p>You'll notice a single <mark> div </mark> in the body of this file. This is where our React application will be rendered.</p>
<img src={renderImg} alt="file not found" className="image" />
        </div>
      </div>
    </>
  );
};

export default ReactRenderHTML;