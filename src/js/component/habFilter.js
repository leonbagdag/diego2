import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const HabFilter = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.habilidades.map(item => {
					if (item.habilidad) {
						return (
							<li className="list-group-item" key={item.id.toString()}>
								<span>{item.name}</span>
							</li>
						);
					}
				})}
			</ul>
			<Link to="/controlPanel/habilidades">Administrar mis habilidades</Link>
		</div>
	);
};
