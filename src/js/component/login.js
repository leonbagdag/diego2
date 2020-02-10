<<<<<<< Updated upstream
import React from "react";

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			fields: {},
			errors: {}
		};

		this.handleChange = this.handleChange.bind(this);
		this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
	}

	handleChange(e) {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});
	}

	submituserRegistrationForm(e) {
		e.preventDefault();
		if (this.validateForm()) {
			let fields = {};
			fields["username"] = "";
			fields["contraseña"] = "";
			this.setState({ fields: fields });
			alert("Form submitted");
=======
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: 200
>>>>>>> Stashed changes
		}
	}
}));

<<<<<<< Updated upstream
	validateForm() {
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;

		if (!fields["username"]) {
			formIsValid = false;
			errors["username"] = "*Ingrese su Nombre";
		}

		if (typeof fields["username"] !== "undefined") {
			if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
				formIsValid = false;
				errors["username"] = "*Ingrese Caracteres Válidos.";
			}
		}

		if (!fields["contraseña"]) {
			formIsValid = false;
			errors["contraseña"] = "*Ingrese Contraseña";
		}

		if (typeof fields["contraseña"] !== "undefined") {
			if (!fields["contraseña"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
				formIsValid = false;
				errors["contraseña"] = "*Ingrese una Contraseña mas Segura";
			}
		}

		this.setState({
			errors: errors
		});
		return formIsValid;
	}

	render() {
		return (
			<div className="container py-4 my-2">
				<div id="main-registration-container">
					<div id="register">
						<h3>Login Page</h3>
						<form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>
							<label>Name</label>
							<input
								type="text"
								name="username"
								value={this.state.fields.username}
								onChange={this.handleChange}
							/>
							<div className="errorMsg">{this.state.errors.mobileno}</div>
							<label>Contraseña</label>
							<input
								type="contraseña"
								name="contraseña"
								value={this.state.fields.password}
								onChange={this.handleChange}
							/>
							<div className="errorMsg">{this.state.errors.password}</div>
							<input type="submit" className="button" value="Register" />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Form;
=======
const SignIn = () => {
	const [user, setUser] = useState({
		email: "",
		password: ""
	});
	const inputChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	const signIn = () => {
		// validate al data
		// call back-end wa adelo al user value
	};
	return (
		<div>
			<h1>Online Shop</h1>
			<img
				url="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg"
				alt="cart"></img>
			<h3>Sign in</h3>
			<TextField name="email" id="outlined-basic" label="Outlined" variant="outlined" onChange={inputChange} />
			<TextField name="password" id="outlined-basic" label="Outlined" variant="outlined" onChange={inputChange} />
			<Button variant="contained" color="primary" onClick={signIn}>
				Primary
			</Button>
			<a href="">New Customer? Sign up!</a>
		</div>
	);
};

export default SignIn;
>>>>>>> Stashed changes
