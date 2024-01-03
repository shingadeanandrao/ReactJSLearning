import HTMLConcepts from "./HTMLConcepts";
import "./customDiv.css";

const HTML = () => {
  return (
    <>
      <div class="row">
       <div class="col-md-2 customDiv">
          <HTMLConcepts />
        </div>
        <div class="col-md-8">
      <h2>Welcome to HTML Learning Session</h2>
      <br/>
      <p>HTML is the standard markup language for Web pages.<br/><br/>

With HTML you can create your own Website.<br/><br/>

HTML is easy to learn - You will enjoy it!</p>
</div>
</div>
    </>
  )
}

export default HTML;
