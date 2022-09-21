import React from "react";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// const ConditionalWrapper = ({
//     condition,
//     wrapper,
//     children,
//   }) => (condition ? wrapper(children) : console.log('data: '+children));

function AnswerDialog(){

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
		<Button variant="primary" onClick={handleShow}>
			Answer
		</Button>

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
              <Form.Label>Email address</Form.Label>
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
              <Form.Label>Example textarea</Form.Label>
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
	);
}

export default AnswerDialog;


// return(
// 	<>
// 		<div classNameName="container">
// 			<h1>Bootstrap Modal demo</h1>
// 			<button type="button" classNameName="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
// 			Click here to see Modal window
// 			</button>

// 			<div classNameName="modal fade" id="myModal" /*tabindex="-1"*/ role="dialog" aria-labelledby="myModalLabel">
// 				<div classNameName="modal-dialog" role="document">
// 					<div classNameName="modal-content">
// 						<div classNameName="modal-header">
// 							<button type="button" classNameName="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
// 							<h4 classNameName="modal-title" id="myModalLabel">Header message in the Modal!</h4>
// 						</div>
// 						<div classNameName="modal-body">
// 							The body of the modal, where you can show a message in single or multi-line. Even include a video. <br />
// 							For example, embed a youtube video! OR <br />
// 							Add some picture.
// 						</div>
// 						<div classNameName="modal-footer">
// 							<button type="button" classNameName="btn btn-default" data-dismiss="modal">I got it! Close</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</>
// );