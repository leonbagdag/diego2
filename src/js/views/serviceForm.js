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
		name: "",
		description: "",
		category: 0, //debe ser igual al id de la categoría a la que pertenece la solicitud.
		street: "",
		home_number: "",
		more_info: "",
		region: "Region...", // debe ser igual al id de la región.
		comuna: "Comuna..." // debe ser igual al id de la comuna donde se requere el servicio.
	});

	const handleChange = event => {
		const new_state = Object.assign(state, { [event.target.id]: event.target.value });
		setState({ ...new_state });
		if (store.form_api_error.target !== undefined) {
			actions.clear_form_error();
		}
	};

	const regionSelect = event => {
		//eslint-disable-next-line
		console.log(event.target);
	};

	const handleSubmit = event => {
		event.preventDefault();
		actions.create_service_request(state);
	};

	const select_category = id => {
		const new_state = Object.assign(state, { category: id });
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
								<label htmlFor="serv_name">Ponle un nombre a tu solicitud (*)</label>
								<input
									type="text"
									className={
										store.form_api_error.target === "name"
											? "form-control is-invalid"
											: "form-control"
									}
									id="name"
									placeholder="p. ej.: Trámite en registro civil"
									value={state.name || ""}
									onChange={handleChange}
								/>
								<div
									className="invalid-tooltip"
									style={{ position: "absolute", right: "0px", top: "0px" }}>
									{store.form_api_error.msg}
								</div>
							</div>
							<div className="form-group mx-auto" style={{ position: "relative" }}>
								<label htmlFor="serv_name">Ingresa una breve descripción de tu requerimiento (*)</label>
								<textarea
									type="text"
									className={
										store.form_api_error.target === "description"
											? "form-control is-invalid"
											: "form-control"
									}
									id="description"
									placeholder="p. ej.: Retirar documento notariado"
									value={state.description || ""}
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
								<label htmlFor="service_category">¿A qué categoría pertenece tu solicitud? (*)</label>
								<div className="row d-flex justify-content-around container">
									{store.app_data.all_categories.map(item => {
										return (
											<button
												className={
													state.category === item.id ? cat_style.active : cat_style.inactive
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
							<div className="container">
								<h5>Indícanos la dirección donde se requiere el servicio (*)</h5>
							</div>
							<div className="row">
								<div className="form-group mx-auto col-sm-4" style={{ position: "relative" }}>
									<label>Calle (*)</label>
									<input
										type="text"
										className={
											store.form_api_error.target === "street"
												? "form-control is-invalid"
												: "form-control"
										}
										id="street"
										placeholder="Calle/Avenida"
										value={state.street || ""}
										onChange={handleChange}
									/>
									<div
										className="invalid-tooltip"
										style={{ position: "absolute", right: "0px", top: "0px" }}>
										{store.form_api_error.msg}
									</div>
								</div>
								<div className="form-group mx-auto col-sm-4" style={{ position: "relative" }}>
									<label>Número (*)</label>
									<input
										type="text"
										className={
											store.form_api_error.target === "home_number"
												? "form-control is-invalid"
												: "form-control"
										}
										id="home_number"
										aria-describedby="home_number"
										placeholder="Número de domicilio"
										value={state.home_number || ""}
										onChange={handleChange}
									/>
									<div
										className="invalid-tooltip"
										style={{ position: "absolute", right: "0px", top: "0px" }}>
										{store.form_api_error.msg}
									</div>
								</div>
								<div className="form-group mx-auto col-sm-4" style={{ position: "relative" }}>
									<label>Información Adicional</label>
									<input
										type="text"
										className="form-control"
										id="more_info"
										aria-describedby="more_info"
										placeholder="Otra información"
										value={state.more_info || ""}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="row">
								<div className="form-group mx-auto col-sm-4" style={{ position: "relative" }}>
									<label>Región (*)</label>
									<select
										className={
											store.form_api_error.target === "region"
												? "form-control is-invalid"
												: "form-control"
										}
										id="region"
										value={state.region}
										onChange={handleChange}>
										<option value="Región...">Región...</option>
										{store.app_data.all_regions.map(item => {
											return (
												<option key={item.id.toString()} value={item.name}>
													{item.name}
												</option>
											);
										})}
									</select>
									<div
										className="invalid-tooltip"
										style={{ position: "absolute", right: "0px", top: "0px" }}>
										{store.form_api_error.msg}
									</div>
								</div>
								<div className="form-group mx-auto col-sm-4" style={{ position: "relative" }}>
									<label>Comuna (*)</label>
									<select
										className={
											store.form_api_error.target === "comuna"
												? "form-control is-invalid"
												: "form-control"
										}
										id="comuna"
										value={state.comuna}
										onChange={regionSelect}>
										{store.comunas.map(item => {
											return (
												<option key={item.id.toString()} value={item.name}>
													{item.name}
												</option>
											);
										})}
									</select>
									<div
										className="invalid-tooltip"
										style={{ position: "absolute", right: "0px", top: "0px" }}>
										{store.form_api_error.msg}
									</div>
								</div>
							</div>
							<button type="button" className="btn btn-primary" onClick={handleSubmit}>
								Solicitar
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
};
