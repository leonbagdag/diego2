import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { HabFilter } from "../component/habFilter";

export const Navegar = () => {
	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3">
						<h3>Filtrar por:</h3>
						<p>Mis habilidades:</p>
						<HabFilter />
						<p>Mi ubicación:</p>
					</div>
					<div className="col-md-9">
						<h1>services</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
