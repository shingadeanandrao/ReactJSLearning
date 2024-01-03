import editorImg from './Untitled.png'
import HTMLConcepts from "../HTMLConcepts";
import { useNavigate } from "react-router-dom";

const HTMLEditors = () => {

  const navigate = useNavigate();
    const goBack = () => {
      navigate("/HTML/HTMLEditors", {replace:true});
    }

      const goForward = () => {
        navigate("/HTML/HTMLBasics", {replace:true});
      
    }

  return (
    <>
      <div className="row">
        <div class="col-md-2 customDiv">
          <HTMLConcepts />
        </div>
        <div class="col-md-8">
          <h1>HTML Editors</h1>

          <button type="button" class="btn btn-success btn-lg left" onClick={goBack}>Back</button>
          <button type="button" class="btn btn-success btn-lg right" onClick={goForward}>Next</button>
          <hr/>
          <p>A simple text editor is all you need to learn HTML.</p>
          <hr/>

          <h2>Learn HTML Using Notepad or TextEdit</h2>
          <p>Web pages can be created and modified by using professional HTML editors.<br/>

            However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).<br/>

            We believe that using a simple text editor is a good way to learn HTML.<br/>

            Follow the steps below to create your first web page with Notepad or TextEdit.</p>

            <h2>Step 1: Open Notepad (PC)</h2>
            <p><strong>Windows 8 or later:</strong> <br/>

                Open the <strong> Start Screen</strong> (the window symbol at the bottom left on your screen). Type <strong>Notepad</strong>.<br/>

                <strong>Windows 7 or earlier:</strong> <br/>

                Open <strong>Start {">"} Programs {">"} Accessories {">"} Notepad</strong></p>
                <hr/>
            <p><strong>Step 1: Open TextEdit (Mac)</strong><br/>
                Open <strong>Finder {">"} Applications {">"} TextEdit </strong><br/>

                Also change some preferences to get the application to save files correctly. In <strong>Preferences {">"} Format {">"} </strong>choose<strong> "Plain Text"</strong><br/>

                Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of <br/>formatted text".

                <strong>Then open a new document to place the code.</strong></p><hr/>
            <h2>    Step 2: Write Some HTML </h2>
            <p>  Write or copy the following HTML code into Notepad:</p> 
            <img src={editorImg} alt="source not found"/>

          <hr/>
        </div>
      </div>
    </>
  );
};

export default HTMLEditors;