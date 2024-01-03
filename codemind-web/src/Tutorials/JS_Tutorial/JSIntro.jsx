import JSConcepts from "../JSConcepts";
import { useNavigate } from "react-router-dom";
const JSIntro = () => {
  const navigate = useNavigate();
    const goBack = () => {
      navigate("/JavaScript", {replace:true});
    }
  return (
    <>
      <div className="row">
        <div class="col-md-2 customDiv">
          <JSConcepts />
        </div>
        <div class="col-md-8">
          <h2>JavaScript Introduction</h2>
          <button type="button" class="btn btn-secondary btn-lg left" onClick={goBack}>Home</button>
          <h3>JavaScript Can Change HTML Content</h3>
          <p>One of many JavaScript HTML methods is <span style={{color:'red'}}>{'getElementById()'}</span>.<br/>
                The example below "finds" an HTML element (with id="demo"), and changes the element content <br/> (innerHTML) to "Hello JavaScript":
          </p>
        </div>
      </div>
    </>
  );
};

export default JSIntro;
