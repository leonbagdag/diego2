import React, { useEffect, useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		email: "",
		password: ""
	});

	const handleChange = event => {
		if (event.target.id == "userEmail") {
			setState({ email: event.target.value, password: state.password });
		} else if (event.target.id == "userPassword") {
			setState({ password: event.target.value, email: state.email });
		}
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
				<div className="card mx-auto mt-5 w-50">
					<div className="card-body">
						<form id="loginForm" onSubmit={handleSubmit}>
							<div className="form-group mx-auto">
								<label htmlFor="userEmail">Email</label>
								<input
									type="email"
									className="form-control"
									id="userEmail"
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
									id="userPassword"
									placeholder="Password"
									value={state.password}
									onChange={handleChange}
								/>
							</div>
							<button type="submit" className="btn btn-primary mx-auto">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
};
