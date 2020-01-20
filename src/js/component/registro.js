import React from "react";

class RegisterForm extends React.Component {
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
			fields["email"] = "";
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

		if (!fields["email"]) {
			formIsValid = false;
			errors["email"] = "*Ingrese su Correo";
		}

		if (typeof fields["email"] !== "undefined") {
			//regular expression for email validation
			var pattern = new RegExp(
				/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			);
			if (!pattern.test(fields["email"])) {
				formIsValid = false;
				errors["email"] = "*Ingrese un Correo Válido";
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
			<div id="main-registration-container">
				<div id="register">
					<h3>Registration page</h3>
					<form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>
						<label>Name</label>
						<input
							type="text"
							name="username"
							value={this.state.fields.username}
							onChange={this.handleChange}
						/>
						<div className="errorMsg">{this.state.errors.username}</div>
						<label>Email:</label>
						<input
							type="text"
							name="email"
							value={this.state.fields.emailid}
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
		);
	}
}

export default RegisterForm;
