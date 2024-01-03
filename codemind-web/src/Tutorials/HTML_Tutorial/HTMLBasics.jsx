import editorImg from './Untitled.png'
import HTMLConcepts from "../HTMLConcepts";
import { useNavigate } from "react-router-dom";

const HTMLBasics = () => {

  const navigate = useNavigate();
    const goBack = () => {
      navigate("/HTML/HTMLEditors", {replace:true});
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
          <h1>HTML Basic Examples</h1>

          <button type="button" class="btn btn-success btn-lg left" onClick={goBack}>Back</button>
          <button type="button" class="btn btn-success btn-lg right" onClick={goForward}>Next</button>
          <hr/>
          <p>In this chapter we will show some basic HTML examples.<br/>

            Don't worry if we use tags you have not learned about yet.</p>
            <hr />
            <h2>HTML Documents</h2>
            <p>All HTML documents must start with a document type declaration:<span style={{color:"red"}}> {"<!DOCTYPE html>"}</span>.<br/>

                The HTML document itself begins with <span style={{color:"red"}}>{"<html>"}</span> and ends with<span style={{color:"red"}}>{"<html>"}</span>.<br/>

                The visible part of the HTML document is between<span style={{color:"red"}}> {"<body>"}</span> and <span style={{color:"red"}}>{"<body>"}</span>.</p>
            <h3>Example:</h3>
            <img src={editorImg} alt="source not found"/><hr/>
            <h2>HTML Headings</h2>
            <p>HTML headings are defined with the <span style={{color:"red"}}>{'<h1>'}</span> to <span style={{color:"red"}}>{'<h6>'}</span> tags.<br/>

            <span style={{color:"red"}}>{'<h1>'}</span> defines the most important heading.<span style={{color:"red"}}> {'<h6>'} </span>defines the least important heading: </p><hr/>
            <h2>HTML Paragraphs</h2>
            <p>HTML paragraphs are defined with the <span style={{color:"red"}}>{'<p>'}</span> tag:</p><hr/>
            <h2>HTML Links</h2>
            <p>HTML links are defined with the <span style={{color:"red"}}>{'<a>'}</span> tag:</p><hr/>
            <p>The link's destination is specified in the <span style={{color:"red"}}>{'href'}</span> attribute. <br/>

                Attributes are used to provide additional information about HTML elements.<br/>

                You will learn more about attributes in a later chapter.</p><hr/>
            <h2>HTML Image</h2>
            <p>HTML images are defined with the <span style={{color:"red"}}>{'<img>'}</span> tag.<br/>

            The source file <span style={{color:"red"}}>{'(src)'}</span>, alternative text <span style={{color:"red"}}>{'(alt)'}</span>, <span style={{color:"red"}}>{'width'}</span>, and <span style={{color:"red"}}>{'height'}</span> are provided as attributes:</p><hr/>
        </div>
      </div>
    </>
  );
};

export default HTMLBasics;