import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
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

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
                      <Button variant="primary" onClick={handleShow}> Answer </Button>
                  </Card.Header>
                  <Card.Img variant="top" src="holder.js/100px160" />
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
      onHide={handleClose}
      //aria-labelledby="contained-modal-title-vcenter"
      centered
      // full-screen={'xxl-down'}
      size={'lg'}
      backdrop="static"
      keyboard={true}
    >
    <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>sender</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>content request</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>answer from manager </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </>
    
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
    
  )
}
export default TableRequests;