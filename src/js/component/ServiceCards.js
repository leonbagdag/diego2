import React, { Component } from "react";

class ServiceCards extends Component {
	constructor() {
		super();
		this.state = {
			service: "",
			description: "",
			email: "",
			message: "",
			formError: false
		};
	}

	getService = e => {
		let servicename = e.target.value;
		this.setState({
			service: servicename
		});
		console.log(this.state.service);
	};

	getDescription = e => {
		let descriptionname = e.target.value;
		this.setState({
			description: descriptionname
		});
		console.log(this.state.description);
	};

	getEmail = e => {
		let userEmail = e.target.value;
		//the most important thing is that we use a RegEx
		//in order to manage the input of the email
		//at least we can get a some what valid email
		if (
			userEmail.match(
				/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
			)
		) {
			this.setState({
				email: userEmail
			});
		} else {
			this.setState({
				email: ""
			});
			console.log("Incorrect Email, must match Expression");
		}

		console.log(this.state.email);
	};

	getDescription = e => {
		let userMessage = e.target.value;
		this.setState({
			message: userMessage
		});
		console.log(this.state.message);
	};
	//send the form
	submitForm = e => {
		e.preventDefault();

		if (
			this.state.service === "" ||
			this.state.description === "" ||
			this.state.email === "" ||
			this.state.message === ""
		) {
			this.setState({
				formError: true
			});
			return false;
		} else {
			this.setState({
				formError: false
			});
			console.log(`UserData: {
            servicename: ${this.state.service},
            descriptionname: ${this.state.description},
            Email: ${this.state.email},
            Message: ${this.state.message}
        }`);

			console.log("form sent");
		}
	};

	render() {
		return (
			<div className="container py-4 my-2">
				<form>
					{/* I am just sending a basic error message */}
					{this.state.formError && <p className="error">Fill all the input fields please.</p>}
					<p>
						Ponte en contacto con un proveedor de servicios en minutos. Mira Perfiles, Calificaciones,
						experiencia y chatea con ellos Califica al proveedor cuando estés 100% satisfecho con su
						trabajo.
					</p>
					<div>
						<label htmlFor="name">Servicio</label>
						<input
							type="text"
							service="service"
							placeholder="Ingresa un nombre para tu servicio"
							onChange={this.getName}
						/>
					</div>
					<div>
						<label htmlFor="description">Description</label>
						<input
							type="text"
							description="description"
							placeholder="Ingresa un nombre para tu servicio"
							onChange={this.getDescription}
						/>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							placeholder="We will contact you after reviewing your message"
							onChange={this.getEmail}
						/>
					</div>
					<div>
						<label htmlFor="name">Categoría</label>
						<select className="form-control form-control-sm">
							<option></option>
							<option>Trámites Bancarios</option>
							<option>Trámites Legales</option>
							<option>Cuidado de Mascotas</option>
							<option>Electricidad</option>
							<option>Climatización</option>
						</select>
					</div>
					<div>
						<p></p>
						<input type="submit" name="submit" value="Send" onClick={this.submitForm} />
					</div>
				</form>
			</div>
		);
	}
}

export default ServiceCards;
