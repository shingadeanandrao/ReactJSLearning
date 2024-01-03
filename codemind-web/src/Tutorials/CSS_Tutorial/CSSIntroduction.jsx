import CSSConcepts from "../CSSConcepts";
import { useNavigate } from "react-router-dom";

const CSSIntro = () => {

  const navigate = useNavigate();
    const goBack = () => {
      navigate("/CSS/", {replace:true});
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
          <h1>CSS Introduction</h1>

          <button type="button" class="btn btn-secondary btn-lg left" onClick={goBack}>Back</button>
          <button type="button" class="btn btn-secondary btn-lg right" onClick={goForward}>Next</button>
          <hr/>
          <p>CSS is the language we use to style a Web page.</p>

          <h2>What is CSS?</h2>
          <p>CSS stands for Cascading Style Sheets<br/><br/>
            CSS describes how HTML elements are to be displayed on screen, paper, or in other media<br/><br/>
            CSS saves a lot of work. It can control the layout of multiple web pages all at once<br/><br/>
            External stylesheets are stored in CSS files</p>
          <hr/>
          <h2>Why Use CSS?</h2>
          <p> CSS is used to define styles for your web pages, including the design, layout and variations in display for<br/> different devices and screen sizes.</p>
          
          <hr/>
        
        </div>
      </div>
    </>
  );
};

export default CSSIntro;