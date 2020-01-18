import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Avatar from "../../img/avatar.png";
import "../../styles/login.scss";

export class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		handleClose: false,
		handleShow: false,
		show: false
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	handleShow = () => {
		this.setState({ show: true });
	};

render() {
		return (
			<><Nav.Link eventKey="link-1" onClick={() => this.handleShow()}>
					Registro
				</Nav.Link>
				<Modal show={this.state.show} onHide={this.handleClose} animation={true} className="modal-body">
					<Modal.Body>
						<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}