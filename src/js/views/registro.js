import React, { useEffect, useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Registro = () => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState({
		f_name: "",
		l_name: "",
		email: "",
		password: "",
		re_password: ""
	});

	const handleChange = event => {
		const new_state = Object.assign(state, { [event.target.id]: event.target.value });
		//eslint-disable-next-line
		setState({ ...new_state });
		if (store.form_api_error.target !== undefined) {
			actions.clear_form_error();
		}
	};

	const handleSubmit = event => {
		event.preventDefault();
		//eslint-disable-next-line
		console.log(state);
		// actions.registro(state);
	};

	useEffect(() => {
		//eslint-disable-next-line
		return () => {
			actions.clear_form_error();
		};
	}, []);

	if (store.logged) {
		return <Redirect to="/" />;
	} else {
		return (
			<div className="container">
				<div className="card mx-auto mt-5" style={{ maxWidth: "500px" }}>
					<div className="card-body">
						<form id="loginForm" onSubmit={handleSubmit}>
							<div className="form-group mx-auto">
								<label htmlFor="f_name">Primer Nombre:</label>
								<input
									type="text"
									className="form-control"
									id="f_name"
									aria-describedby="first_name"
									placeholder="Ingresa tu primer nombre"
									value={state.f_name || ""}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-group mx-auto">
								<label htmlFor="l_name">Apellido Paterno:</label>
								<input
									type="text"
									className="form-control"
									id="l_name"
									aria-describedby="last_name"
									placeholder="Ingresa tu apellido"
									value={state.l_name || ""}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-group mx-auto">
								<label htmlFor="userEmail">Email</label>
								<input
									type="email"
									className="form-control"
									id="email"
									aria-describedby="emailHelp"
									placeholder="Ingresa tu email"
									value={state.email || ""}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-group mx-auto">
								<label htmlFor="userPassword">Contraseña</label>
								<input
									type="password"
									className="form-control"
									id="password"
									placeholder="Contraseña"
									value={state.password || ""}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-group mx-auto">
								<label htmlFor="userPassword">Repite tu Contraseña</label>
								<input
									type="password"
									className="form-control"
									id="re_password"
									placeholder="Repite tu contraseña"
									value={state.re_password || ""}
									onChange={handleChange}
									required
								/>
							</div>
							<button type="submit" className="btn btn-primary mx-auto">
								Registrarme
							</button>
						</form>
					</div>
					<div className="card-footer">
						<p> ¿Ya tienes una cuenta? </p>
						<Link to="/login">Ingresa aquí</Link>
					</div>
				</div>
			</div>
		);
	}
};
