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
		if (event.target.id === "re_password" && state.password !== state.re_password) {
			actions.set_form_error({
				msg: "Contraseña no coincide",
				target: "re_password"
			});
		} else if (store.form_api_error.target !== undefined) {
			actions.clear_form_error();
		}
	};

	const handleSubmit = event => {
		event.preventDefault();
		let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; //expresion regular para verificar contraseña
		let reEmail = /\S+@\S+\.\S+/; //expresion regular para verificar email.

		if (state.f_name === "") {
			actions.set_form_error({
				msg: "Ingresa tu primer nombre",
				target: "f_name"
			});
		} else if (state.l_name === "") {
			actions.set_form_error({
				msg: "Ingresa tu apellido",
				target: "l_name"
			});
		} else if (!reEmail.test(state.email)) {
			actions.set_form_error({
				msg: "Ingresa un email válido",
				target: "email"
			});
		} else if (!re.test(state.password)) {
			actions.set_form_error({
				msg: "Contraseña inválida",
				target: "password"
			});
		} else if (state.password !== state.re_password) {
			actions.set_form_error({
				msg: "Contraseña no coincide",
				target: "re_password"
			});
		} else {
			actions.registro(state);
		}
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
							<div className="row">
								<div className="form-group mx-auto col-sm-6" style={{ position: "relative" }}>
									<label htmlFor="f_name">Nombre:</label>
									<input
										type="text"
										className={
											store.form_api_error.target === "f_name"
												? "form-control is-invalid"
												: "form-control"
										}
										id="f_name"
										aria-describedby="first_name"
										placeholder="Ingresa tu primer nombre"
										value={state.f_name || ""}
										onChange={handleChange}
									/>
									<div
										className="invalid-tooltip"
										style={{ position: "absolute", right: "0px", top: "0px" }}>
										{store.form_api_error.msg}
									</div>
								</div>
								<div className="form-group mx-auto col-sm-6" style={{ position: "relative" }}>
									<label htmlFor="l_name">Apellido:</label>
									<input
										type="text"
										className={
											store.form_api_error.target === "l_name"
												? "form-control is-invalid"
												: "form-control"
										}
										id="l_name"
										aria-describedby="last_name"
										placeholder="Ingresa tu apellido"
										value={state.l_name || ""}
										onChange={handleChange}
									/>
									<div
										className="invalid-tooltip"
										style={{ position: "absolute", right: "0px", top: "0px" }}>
										{store.form_api_error.msg}
									</div>
								</div>
							</div>
							<div className="form-group mx-auto" style={{ position: "relative" }}>
								<label htmlFor="userEmail">Email</label>
								<input
									type="email"
									className={
										store.form_api_error.target === "email"
											? "form-control is-invalid"
											: "form-control"
									}
									id="email"
									aria-describedby="emailHelp"
									placeholder="Ingresa tu email"
									value={state.email || ""}
									onChange={handleChange}
								/>
								<div
									className="invalid-tooltip"
									style={{ position: "absolute", right: "0px", top: "0px" }}>
									{store.form_api_error.msg}
								</div>
							</div>
							<div className="form-group mx-auto" style={{ position: "relative" }}>
								<label htmlFor="userPassword">Contraseña</label>
								<input
									type="password"
									className={
										store.form_api_error.target === "password"
											? "form-control is-invalid"
											: "form-control"
									}
									id="password"
									placeholder="Contraseña"
									value={state.password || ""}
									onChange={handleChange}
								/>
								<small className="form-text text-muted">
									La contraseña debe contener al menos 6 caracteres, una letra mayúscula y un número
								</small>
								<div
									className="invalid-tooltip"
									style={{ position: "absolute", right: "0px", top: "0px" }}>
									{store.form_api_error.msg}
								</div>
							</div>
							<div className="form-group mx-auto" style={{ position: "relative", marginBottom: "35px" }}>
								<label htmlFor="userPassword">Repite tu Contraseña</label>
								<input
									type="password"
									className={
										store.form_api_error.target === "re_password"
											? "form-control is-invalid"
											: "form-control"
									}
									id="re_password"
									placeholder="Repite tu contraseña"
									value={state.re_password || ""}
									onChange={handleChange}
								/>
								<div
									className="invalid-tooltip"
									style={{ position: "absolute", right: "0px", top: "0px" }}>
									{store.form_api_error.msg}
								</div>
							</div>
							<button type="submit" className="btn btn-primary mx-auto" onClick={handleSubmit}>
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
