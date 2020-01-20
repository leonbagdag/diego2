import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CategoryFilter = () => {
	const { store, actions } = useContext(Context);
	const habStyles = {
		active: "hPill h-active",
		inactive: "hPill h-inactive"
	};

	return (
		<div className="container">
			<div className="text-center mt-2 overflow-auto">
				<h6>Mis Categorías: </h6>
				<div
					className="d-flex flex-wrap justify-content-center overflow-auto mb-2"
					style={{ maxHeight: "300px" }}>
					{store.categorias.map(item => {
						return (
							<div
								className={item.filter ? habStyles.active : habStyles.inactive}
								key={item.id.toString()}
								data-toggle="tooltip"
								data-placement="bottom"
								title={item.name}>
								<i className={item.icon + " fa-2x"}></i>
							</div>
						);
					})}
				</div>
				<Link to="/panel/categorias">Administrar mis categorias</Link>
				<button className="btn btn-link">Reestablecer</button>
			</div>
		</div>
	);
};
