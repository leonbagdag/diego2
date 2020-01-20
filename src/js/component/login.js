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
		}
	}

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
