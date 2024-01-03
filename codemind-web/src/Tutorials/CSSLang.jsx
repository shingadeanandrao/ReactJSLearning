import "./customDiv.css";
import CSSConcepts from "./CSSConcepts";
const CSSLang = () => {
  return (
    <>
      <div class="row">
       <div class="col-md-2 customDiv">
          <CSSConcepts />
        </div>
        <div class="col-md-8">
      <h2>Welcome to CSS Learning Session</h2>
      <br/>
      <p>CSS is the language we use to style an HTML document.<br/> <br/>

CSS describes how HTML elements should be displayed.<br/> <br/>

This tutorial will teach you CSS from basic to advanced.</p>
</div>
</div>
    </>
  )
}

export default CSSLang;
