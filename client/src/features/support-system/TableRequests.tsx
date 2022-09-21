import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { parse, stringify } from 'querystring';


// function RowColLayoutColWidthBreakpointExample() {

 
function TableRequests() {

  const [requests, setRequests] = useState([
  {
    "_id": "631f1dc2ca4b12a93c6236f5",
    "requestNumber": 1,
    "sender": "tz0556769591@gmail.com",
    "subject": "how much?",
    "content": "I don't find the price of product 121",
    "status": false
  }
  ]);

  const [requestDetails, setRequestDetails] = useState(
  {
    "sender": '',
    "subject": '',
    "text": ''
  });
  // const [subject, setSubject] = useState('');
  // const [text, setText] = useState('');

  let answerEmail = {
    to: '',
    subject: '',
    text: '',
  }

  useEffect(() => 
  {
    initRequests().then(data => setRequests(data));
  },[]);

  const initRequests = async() => 
  {
    const response = await fetch('http://localhost:8080/requests');
    const data = await response.json();
    console.log('data: '+data);
    return data;
  }

  const [show, setShow] = useState(false);

	const handleClose = (text: string) => 
  {
    sendAnswer(text);
    setShow(false)
  };

  const handleCloseWithoutSending = () => setShow(false)

	const handleShow = (to: string, subject: string, text: string) => 
  {
    setShow(true);
    // console.log('i handleShow');
    setRequestDetails({sender: to, subject: subject, text: text});
    // setSubject(subject);
    // setText(text);
    // console.log('sender: '+sender)
    
  }
  const sendAnswer = async(text: string) => 
  {
    console.log('sender: '+requestDetails.sender);
    console.log('text: '+text); 
    answerEmail = {to: requestDetails.sender, subject: 'hello, response for your request', text: "In response to your request: " +  requestDetails.subject +" , "+ text}
    const opts = {
        method: 'POST',      
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(answerEmail)
    };
    const response = await fetch('http://localhost:8080/emails', opts);
    // const status = await response.status;
   
      // console.log("status return : " + status);
   
    const data = await response.json();
    console.log('data: '+data);
    return data;
  }

  // const ConditionalWrapper = ({
  //   condition,
  //   wrapper,
  //   children,
  // }) => (condition ? wrapper(children) : console.log('data: '+children));

  // const ConditionalWrapper2 = ({
  //   condition,
  //   wrapper,
  //   children,
  // }) => (condition ? wrapper(children) : console.log('data: '+children));

  return (
    <>
    <Container>
      <Row>
        <Col>
          <Container>
          {requests.filter(req => req.status === false).map((r,index) => (
            <>
             <Row /*if={(1 === 0)}*/ /*md={2}*/> 
              <Col> 
                <Card>
                  <Card.Header>
                    <Button  variant="primary"  onClick={()=>handleShow(r.sender,r.subject,r.content)}>
                      Answer
                    </Button>
                  {/* <button>hai-try button</button> */}
                  </Card.Header>
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  {/* <Card.Link>ansewer</Card.Link> */}
                  <Card.Body>
                    <Card.Title> {r.requestNumber} </Card.Title>
                    <Card.Subtitle> { r.subject} </Card.Subtitle>
                    <Card.Text> {r.content} </Card.Text>
                    <Card.Text><small className="text-muted"> { r.status.toString() }</small></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">{r.sender}</small>
                  </Card.Footer>
                </Card>
              </Col>
             </Row>
            </>
            )
          )}
          
          </Container>
        </Col>
        <Col>
          <Container>
          {requests.filter(req => req.status === true).map((r,index) => (
            // need do this evry 2 times
            <Row /*md={2}*/> 
              <Col> 
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title> {r.requestNumber} </Card.Title>
                    <Card.Subtitle> { r.subject} </Card.Subtitle>
                  <Card.Text> {r.content} </Card.Text>
                  <Card.Text><small className="text-muted"> { r.status.toString() }</small></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">{r.sender}</small>
                  </Card.Footer>
                </Card>
              </Col>

              {/* <Col> 
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title> {r.requestNumber} </Card.Title>
                    <Card.Subtitle> { r.subject} </Card.Subtitle>
                  <Card.Text> {r.content} </Card.Text>
                  <Card.Text><small className="text-muted"> { r.status.toString() }</small></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">{r.sender}</small>
                  </Card.Footer>
                </Card>
              </Col> */}

            </Row>
          ))}
          </Container>
        </Col>
      </Row>
    </Container>

    <Modal 
      show={show}
      onHide={handleCloseWithoutSending}
      //aria-labelledby="contained-modal-title-vcenter"
      centered
      // full-screen={'xxl-down'} 
      size={'lg'} 
      backdrop="static"
      keyboard={true}
    >
      <Modal.Header closeButton>
          <Modal.Title>{requestDetails.subject}</Modal.Title>
      </Modal.Header>
			<Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{requestDetails.text}</Form.Label>
            <br></br>
            {/* <Form.Label>from: </Form.Label>
            <Form.Control
              type="email"
              placeholder={sender}
              autoFocus
            /> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>your answer: </Form.Label> */}
            <Form.Control id="formControlContent" as="textarea" rows={5} />
          </Form.Group>
        </Form>
      </Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleCloseWithoutSending}>
					Close
				</Button>
				<Button variant="primary" onClick={()=>handleClose(/*typeof*/(document.getElementById('formControlContent') as HTMLInputElement).value.toString())}>
					Send
				</Button>
			</Modal.Footer>
		</Modal>
    </>
    
  )
}
export default TableRequests;


    // <Container>
    //     {requests.filter(req => req.status === false).map((r,index) => (
    //       // need do this evry 2 times
    //       <Row md={4}> 
    //         <Col> 
    //           <Card>
    //             <Card.Img variant="top" src="holder.js/100px160" />
    //             <Card.Body>
    //               <Card.Title> {r.requestNumber} </Card.Title>
    //               <Card.Subtitle> { r.subject} </Card.Subtitle>
    //               <Card.Text> {r.content} </Card.Text>
    //               <Card.Text><small className="text-muted"> { r.status.toString() }</small></Card.Text>
    //             </Card.Body>
    //             <Card.Footer>
    //               <small className="text-muted">Last updated 3 mins ago</small>
    //             </Card.Footer>
    //           </Card>
    //         </Col>
    //       </Row>
    //     ))}
      
    //   {requests.filter(req => req.status === true).map((r,index) => (
    //       // need do this evry 2 times
    //       <Row md={4}> 
    //         <Col> 
    //           <Card>
    //             <Card.Img variant="top" src="holder.js/100px160" />
    //             <Card.Body>
    //               <Card.Title> {r.requestNumber} </Card.Title>
    //               <Card.Subtitle> { r.subject} </Card.Subtitle>
    //             <Card.Text> {r.content} </Card.Text>
    //             <Card.Text><small className="text-muted"> { r.status.toString() }</small></Card.Text>
    //             </Card.Body>
    //             <Card.Footer>
    //               <small className="text-muted">Last updated 3 mins ago</small>
    //             </Card.Footer>
    //           </Card>
    //         </Col>
    //       </Row>
    //     ))}
       
    // </Container>