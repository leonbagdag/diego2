import React, { useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

import { CategoryFilter } from "../component/categoryFilter";
import { Service_card } from "../component/service_card";

export const BuscarServicio = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// component-did-mount, fetch api to get the latest services requests.-
		actions.find_services();
	}, []);

	if (!store.logged) {
		return <Redirect to="/login" />; //Protected view
	} else {
		return (
			<div className="container-fluid mt-3">
				<div className="row">
					<div className="col-lg-3">
						<div className="accordion" id="accordionExample">
							<div className="card">
								<div className="card-body" id="headingOne">
									<h2 className="mb-0">
										<button
											className="btn btn-link"
											type="button"
											data-toggle="collapse"
											data-target="#collapseOne"
											aria-expanded="true"
											aria-controls="collapseOne">
											<i className="fas fa-filter"></i>
											<span> Filtrar por Categoría</span>
										</button>
									</h2>
								</div>
								<div
									id="collapseOne"
									className="collapse show"
									aria-labelledby="headingOne"
									data-parent="#accordionExample">
									<div className="card-body">
										<CategoryFilter />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-9">
						<Service_card />
					</div>
				</div>
			</div>
		);
	}
};
