import React from 'react';


import '../Tutorials/customDiv.css';
const ContactUs = () => {
  
  return (
    <>
      <p style={{color:'green'}}><u>CONNECT WITH</u></p><br/>
      <h2>CODEMIND TECHNOLOGY</h2><br/>
      <p>For personalized guidance and support on your educational journey. Reach us by phone or email to discuss your goals and discover how our programs can lead you to success.</p>
      <br/>
      <p><b>Our Address:</b><br/>
Ashtvinayak Building,<br/>
4th-Floor, Vinayak Colony, Kirti Classic, <br/>Near Luxmi Chowk, Hinjewadi, Pune-411058.</p>

<form className='form' >
  <div class="row mb-2">
    <div class="col-sm-10">
    <input type="text" class="form-control" placeholder='Full Name'/>
    <input type="email" class="form-control" placeholder='Email'/>
      <input type="number" class="form-control" placeholder='Mobile number'/>
      <label>Courses</label>
      <select>
        <option>Angular</option>
        <option>React</option>
        <option>Dot Net</option>
        <option>FullStack</option>
        <option>Manual and Automation testing</option>
        <option>Java</option>
      </select>
      <p style={{color:"red"}}>Please select any one course<sup>*</sup></p>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    </>
  )
}

export default ContactUs;
