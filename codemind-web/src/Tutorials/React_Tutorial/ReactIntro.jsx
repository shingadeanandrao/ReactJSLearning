import ReactConcepts from "../ReactConcepts";
import { useNavigate } from "react-router-dom";
const ReactIntro = () => {
  const navigate = useNavigate();
    const goBack = () => {
      navigate("/React", {replace:true});
    }
  return (
    <>
      <div className="row">
        <div class="col-md-2 customDiv">
          <ReactConcepts />
        </div>
        <div class="col-md-8">
          <h2>React Intro</h2>
          <button type="button" class="btn btn-secondary btn-lg left" onClick={goBack}>Home</button>
          <h5>What is React?</h5>
          <p>
            React, sometimes referred to as a frontend JavaScript framework, is
            a JavaScript library created by Facebook. React is a tool for
            building UI components.
          </p>
        </div>
      </div>
    </>
  );
};

export default ReactIntro;
