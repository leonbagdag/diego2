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
		const new_state = Object.assign(state, { [event.target.id]: event.target.value });
		setState({ ...new_state });
		if (store.form_api_error.target !== undefined) {
			actions.clear_form_error();
		}
	};

	const handleSubmit = event => {
		event.preventDefault();
		let reEmail = /\S+@\S+\.\S+/; //expresion regular para verificar email.

		if (!reEmail.test(state.email)) {
			actions.set_form_error({
				msg: "Ingresa un email válido",
				target: "email"
			});
		} else if (state.password === "") {
			actions.set_form_error({
				msg: "Ingresa tu contraseña",
				target: "password"
			});
		} else {
			actions.login(state);
		}
	};

	useEffect(() => {
		//component will Unmount, clear form errors in store.
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
						<form id="loginForm" onSubmit={handleSubmit} noValidate>
							<div className="form-group mx-auto" style={{ position: "relative", marginBottom: "35px" }}>
								<label htmlFor="email">Email</label>
								<input
									type="email"
									className={
										store.form_api_error.target === "email"
											? "form-control is-invalid"
											: "form-control"
									}
									id="email"
									aria-describedby="emailHelp"
									placeholder="Ingresa email"
									value={state.email || ""}
									onChange={handleChange}
								/>
								<div className="invalid-tooltip">{store.form_api_error.msg}</div>
							</div>
							<div className="form-group mx-auto" style={{ position: "relative", marginBottom: "35px" }}>
								<label htmlFor="password">Contraseña</label>
								<input
									type="password"
									className={
										store.form_api_error.target === "password"
											? "form-control is-invalid"
											: "form-control"
									}
									id="password"
									placeholder="Ingresa tu contraseña"
									value={state.password || ""}
									onChange={handleChange}
								/>
								<div className="invalid-tooltip">{store.form_api_error.msg}</div>
							</div>
							<button type="submit" className="btn btn-primary mx-auto">
								Ingresar
							</button>
						</form>
					</div>
					<div className="card-footer">
						<p> ¿No tienes una cuenta? </p>
						<Link to="/registro">Registrate aquí</Link>
					</div>
				</div>
			</div>
		);
	}
};
