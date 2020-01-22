import React, { useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const ServiceView = props => {
	const { store, actions } = useContext(Context);
	const ID = props.match.params.serviceID;
	const service = store.services.filter(item => {
		if (item.id == ID) {
			return item;
		}
	})[0]; //devuelve un objeto y no un array de la funcion filter.

	const handle_click = () => {
		actions.create_offer(service);
	};

	useEffect(() => {
		// component will unmount
		return () => {
			actions.clean_services();
		};
	}, []);

	if (!store.logged) {
		return <Redirect to="/login" />;
	} else if (store.offer_made) {
		return <Redirect to="/find/service-request" />;
	} else {
		return (
			<div className="container-fluid">
				<div className="container">
					<div className="d-flex justify-content-start">
						<h2>{service.name}</h2>
					</div>
					<div className="d-flex justify-content-end">
						<button type="button" className="btn btn-success" onClick={handle_click}>
							Ofertar al Servicio
						</button>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 bg">
							<h2>Datos del Servicio:</h2>
							<p>Descripción:</p>
							<p>{service.description}</p>
							<p>Fecha de publicación:</p>
							<p></p>
						</div>
						<div className="col-md-6">
							<h2>Datos del Empleador:</h2>
							<p>Nombre</p>
							<p>{service.employer.first_name}</p>
							<p>Calificación:</p>
							<p>{service.employer.score}</p>
						</div>
						<div className="col-md-6"></div>
					</div>
				</div>
			</div>
		);
	}
};

ServiceView.propTypes = {
	match: PropTypes.object
};
