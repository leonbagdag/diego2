import React, { useEffect, useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Registro = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		email: "",
		password: "",
		re_password: "",
		verified_pass: true
	});

	const handleChange = event => {
		const new_state = Object.assign(state, { [event.target.id]: event.target.value });
		setState({ ...new_state });
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (state.password !== state.re_password) {
			const new_state = Object.assign(state, { verified_pass: false });
			setState({ ...new_state });
			console.log(state);
		} else {
			console.log("yes");
		}
	};

	if (store.logged) {
		return <Redirect to="/" />;
	} else {
		return (
			<div className="container">
				<div className="card mx-auto mt-5 w-50">
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
									placeholder="Contraseña"
									value={state.password}
									onChange={handleChange}
								/>
							</div>
							<div className="form-group mx-auto">
								<label htmlFor="userPassword">Password</label>
								<input
									type="password"
									className="form-control"
									id="re_password"
									placeholder="Repite tu contraseña"
									value={state.re_password}
									onChange={handleChange}
								/>
							</div>
							<button type="submit" className="btn btn-primary mx-auto" onClick={handleSubmit}>
								Registrarme
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
};
