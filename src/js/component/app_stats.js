import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const App_stats = () => {
	const { store, actions } = useContext(Context);
	if (store.stats.users === undefined) {
		return <section className="text-center container-fluid"></section>;
	} else {
		return (
			<section className="row container-fluid d-flex my-5">
				<div className="col-sm-4 text-center">
					<h3>{store.stats.users} Usuarios Inscritos</h3>
				</div>
				<div className="col-sm-4 text-center">
					<h3>{store.stats.requests} Servicios Solicitados</h3>
				</div>
				<div className="col-sm-4 text-center">
					<h3>{store.stats.contracts} Contratos</h3>
				</div>
			</section>
		);
	}
};
