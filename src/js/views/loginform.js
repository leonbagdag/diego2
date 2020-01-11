import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Bootstrap from "react-bootstrap";
import FormGroup from "react-bootstrap/FormGroup";
import ControlLabel from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";

export default function Login(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className="Login">
			<form onSubmit={handleSubmit}>
				<FormGroup controlId="email" bsSize="large">
					<ControlLabel>Email</ControlLabel>
					<FormControl autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)} />
				</FormGroup>
				<FormGroup controlId="password" bsSize="large">
					<ControlLabel>Password</ControlLabel>
					<FormControl value={password} onChange={e => setPassword(e.target.value)} type="password" />
				</FormGroup>
				<Button block bsSize="large" disabled={!validateForm()} type="submit">
					Login
				</Button>
			</form>
		</div>
	);
}
