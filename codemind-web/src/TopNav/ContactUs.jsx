import React from 'react';
import { Form, Button,Row,Col,Container } from 'react-bootstrap';


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

{/* <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Form>
            <Form.Group controlId="formFullName">
              <Form.Control type="text" placeholder="Full Name" className="mb-3" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Email" className="mb-3" />
            </Form.Group>

            <Form.Group controlId="formMobileNumber">
              <Form.Control type="number" placeholder="Mobile Number" className="mb-3" />
            </Form.Group>

            <Form.Group controlId="formCourse">
              <Form.Control as="select" required className="mb-3">
                <option value="">Please Select Course</option>
                <option value="Java">Java</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="JavaScript">JavaScript</option>
              </Form.Control>
            </Form.Group>

            <Form.Text style={{ color: "red" }} className="mb-3">
              Please select any one course<sup>*</sup>
            </Form.Text>

            <Button variant="primary" type="submit" className="mb-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container> */}
    <Container className='row justify-content-center'>

    <div className='col-lg-6 col-md-12' style={{backgroundColor:'greenyellow'}}>
      <div className='login-16 mt-5'>
        <div className='align-self-center pad-0 login-box'>
          <div className='form-section align-self-center'>
            <h2 id='title'>
              <b>"Unlock Your Potential Today!"</b>
            </h2>
            <form className='ng-untouched ng-pristine ng-invalid'>
              <div className='form-group clearfix'>
                <div className='form-box'>
                  <input type='text' className='form-control ng-untouched ng-pristine ng-invalid' required placeholder='Full Name'/>
                </div>
              </div>
              <div className='form-group clearfix'>
                <div className='form-box'>
                  <input type='number' className='form-control ng-untouched ng-pristine ng-invalid' required placeholder='Mobile'/>
                </div>
              </div>
              <div className='form-group clearfix'>
                <div className='form-box'>
                  <input type='email' className='form-control ng-untouched ng-pristine ng-invalid' required placeholder='Email'/>
                </div>
              </div>

              <div className='form-group clearfix'>
                <div className='form-box'>
                <select>
                <option value="">Please Select Course</option>
                <option value="Java">Java</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="JavaScript">JavaScript</option>
              </select>
                </div>
              </div>
              <div className='form-group clearfix'>
                <button type='submit' className='btn btn-primary btn-lg btn-theme w-25'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </Container>
    </>
  )
}

export default ContactUs;
