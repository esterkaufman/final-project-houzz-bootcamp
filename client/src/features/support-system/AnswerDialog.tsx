import React from "react";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
			Launch demo modal
		</Button>

		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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