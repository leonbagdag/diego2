import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { HabFilter } from "../component/habFilter";

export const Navegar = () => {
	return (
		<div>
			<div className="container-fluid">
				<div className="row justify-content-around">
					<div className="col-lg-3 border">
						<h3>Filtrar por:</h3>
						<div className="border">
							<p>Mis habilidades:</p>
							<HabFilter />
							<Link to="/controlPanel/habilidades">Administrar mis habilidades</Link>
						</div>
						<div className="border">
							<p>Mi ubicación:</p>
						</div>
					</div>
					<div className="col-lg-8 border">
						<h1>services</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
