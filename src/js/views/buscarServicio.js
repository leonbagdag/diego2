import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { CategoryFilter } from "../component/categoryFilter";
import { LocationFilter } from "../component/locationFilter";

export const BuscarServicio = () => {
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
						<div className="card">
							<div className="card-body" id="headingTwo">
								<h2 className="mb-0">
									<button
										className="btn btn-link"
										type="button"
										data-toggle="collapse"
										data-target="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo">
										<i className="fas fa-filter"></i>
										<span> Filtrar por Ubicación</span>
									</button>
								</h2>
							</div>
							<div
								id="collapseTwo"
								className="collapse"
								aria-labelledby="headingTwo"
								data-parent="#accordionExample">
								<div className="card-body">
									<LocationFilter />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-9">
					<div className="card card-body">
						<h1>services</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
