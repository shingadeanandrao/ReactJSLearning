import HTMLConcepts from "../HTMLConcepts";
import { useNavigate } from "react-router-dom";

const HTMLIntro = () => {

  const navigate = useNavigate();
    const goBack = () => {
      navigate("/HTML/", {replace:true});
    }

      const goForward = () => {
        navigate("/HTML/", {replace:true});
      
    }

  return (
    <>
      <div className="row">
        <div class="col-md-2 customDiv">
          <HTMLConcepts />
        </div>
        <div class="col-md-8">
          <h1>HTML Introduction</h1>

          <button type="button" class="btn btn-success btn-lg left" onClick={goBack}>Back</button>
          <button type="button" class="btn btn-success btn-lg right" onClick={goForward}>Next</button>
          <hr/>
          <p>HTML is the standard markup language for creating Web pages.</p>

          <h2>What is HTML?</h2>
          <ul>
          <li>HTML stands for Hyper Text Markup Language</li>
          <li>HTML is the standard markup language for creating Web pages</li>
          <li>HTML describes the structure of a Web page</li>
          <li>HTML consists of a series of elements</li>
          <li>HTML elements tell the browser how to display the content</li>
          <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
          </ul>
          <hr/>
        </div>
      </div>
    </>
  );
};

export default HTMLIntro;