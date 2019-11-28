import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { CategoryFilter } from "../component/categoryFilter";
import { LocationFilter } from "../component/locationFilter";

export const BuscarServicio = () => {
	return (
		<div className="container-fluid h-100">
			<div className="row">
				<div className="col-lg-2">
					<h3>Filtrar por:</h3>
					<div className="border">
						<CategoryFilter />
					</div>
					<div className="border">
						<LocationFilter />
					</div>
				</div>
				<div className="col-lg-10">
					<h1>services</h1>
				</div>
			</div>
		</div>
	);
};
