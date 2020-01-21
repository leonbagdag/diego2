import React, { useEffect, useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState([
		{
			email: "",
			password: ""
		}
	]);

	useEffect(() => {
		//component did mount
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
				</div>
			</div>
		);
	}
};
