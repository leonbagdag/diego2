import React, { useEffect, useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState([
		{
			email: "",
			password: "",
			email_verified: false,
			passw_verified: false
		}
	]);

	useEffect(() => {
		//component will unmount
		return () => {
			actions.clean_error(); //limpia mensajes de error desde API en el store.
		};
	}, []);

	const handleChange = event => {
		const new_state = Object.assign(state, { [event.target.id]: event.target.value });
		setState({ ...new_state });
	};

	const handleSubmit = event => {
		event.preventDefault();
		actions.login(state);
	};

	if (store.logged) {
		return <Redirect to="/" />;
	} else {
		return (
			<div className="container">
				<div className="card mx-auto mt-5" style={{ maxWidth: "500px" }}>
					<div
						className={
							store.api_error_msg.new_msg ? "alert alert-danger d-flex align-items-center" : "d-none"
						}
						role="alert">
						<p className="my-0">{store.api_error_msg.msg}</p>
					</div>
					<div className="card-body">
						<form id="loginForm" onSubmit={handleSubmit}>
							<div className="form-group mx-auto">
								<label htmlFor="userEmail">Email</label>
								<input
									type="email"
									className="form-control"
									id="email"
									aria-describedby="emailHelp"
									placeholder="Enter email"
									value={state.email}
									onChange={handleChange}
								/>
							</div>
							<div className="form-group mx-auto">
								<label htmlFor="userPassword">Password</label>
								<input
									type="password"
									className="form-control"
									id="password"
									placeholder="Password"
									value={state.password}
									onChange={handleChange}
								/>
							</div>
							<button type="submit" className="btn btn-primary mx-auto" onClick={handleSubmit}>
								Submit
							</button>
						</form>
					</div>
					<div className="card-footer">
						<p> ¿No tienes una cuenta? </p>
						<Link to="/registro">Registrate aquí</Link>
					</div>
				</div>
				<div className="toast" id="error_toast" data-delay="2000">
					<div className="toast-header">Toast Header</div>
					<div className="toast-body">{store.toast_error}</div>
				</div>
			</div>
		);
	}
};
