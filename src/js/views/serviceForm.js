import React, { useEffect, useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const ServiceForm = () => {
	const cat_style = {
		active: "col-md-4 my-2 rounded-pill btn btn-primary",
		inactive: "col-md-4 my-2 rounded-pill btn btn-outline-secondary"
	};

	const { store, actions } = useContext(Context);

	const [state, setState] = useState({
		request_name: "",
		request_description: "",
		category_selected: "", //debe ser igual al id de la categoría a la que pertenece la solicitud
		address: {}
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
		//eslint-disable-next-line
		console.log("submit detected");
	};

	const select_category = id => {
		const new_state = Object.assign(state, { category_selected: id });
		setState({ ...new_state });
	};

	if (!store.logged) {
		return <Redirect to="/" />;
	} else {
		return (
			<div className="container">
				<div className="mt-5">
					<h3>Cuéntanos lo que necesitas</h3>
					<p>
						Ponte en contacto con un Proveedor de servicios en minutos. Mira perfiles, Calificaciones y
						experiencias, y decide quén se adapta mejor a tus necesidades.
					</p>
				</div>
				<div className="card mx-auto mt-5" style={{ maxWidth: "1000px" }}>
					<div className="card-body">
						<form id="service_form" onSubmit={handleSubmit} noValidate>
							<div className="form-group mx-auto" style={{ position: "relative" }}>
								<label htmlFor="serv_name">Ponle un nombre a tu solicitud</label>
								<input
									type="text"
									className={
										store.form_api_error.target === "request_name"
											? "form-control is-invalid"
											: "form-control"
									}
									id="request_name"
									placeholder="p. ej.: Trámite en registro civil"
									value={state.request_name || ""}
									onChange={handleChange}
								/>
								<div
									className="invalid-tooltip"
									style={{ position: "absolute", right: "0px", top: "0px" }}>
									{store.form_api_error.msg}
								</div>
							</div>
							<div className="form-group mx-auto" style={{ position: "relative" }}>
								<label htmlFor="serv_name">Ingresa una breve descripción de tu requerimiento</label>
								<textarea
									type="text"
									className={
										store.form_api_error.target === "request_description"
											? "form-control is-invalid"
											: "form-control"
									}
									id="request_description"
									placeholder="p. ej.: Retirar documento notariado"
									value={state.request_description || ""}
									onChange={handleChange}
									rows="3"></textarea>
								<div
									className="invalid-tooltip"
									style={{ position: "absolute", right: "0px", top: "0px" }}>
									{store.form_api_error.msg}
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="service_file">
									Sube una imagen que pueda ser de utilidad para conocer mejor tus requerimientos
								</label>
								<input type="file" className="form-control-file" id="service_file" />
							</div>
							<div className="form-group">
								<label htmlFor="service_category">¿A qué categoría pertenece tu solicitud?</label>
								<div className="row d-flex justify-content-around container">
									{store.app_data.all_categories.map(item => {
										return (
											<button
												className={
													state.category_selected === item.id
														? cat_style.active
														: cat_style.inactive
												}
												style={{ maxWidth: "300px" }}
												key={item.id.toString()}
												type="button"
												data-toggle="tooltip"
												data-placement="bottom"
												title={item.name}
												onClick={() => select_category(item.id)}>
												<i className={item.logo}></i>
												<div className="d-inline">{" " + item.name}</div>
											</button>
										);
									})}
								</div>
								<small className="form-text text-muted">
									Si no encuentras una categoría que se adapte a tu solicitud, haz click{" "}
									<a href="#">aquí</a>
								</small>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
};
