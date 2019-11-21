import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const HabFilter = () => {
	const { store, actions } = useContext(Context);
	const habStyles = {
		active: "hPill h-active btn btn-outline-primary rounded-pill",
		inactive: "hPill h-inactive btn btn-outline-secondary rounded-pill"
	};

	return (
		<div className="d-flex justify-content-center flex-wrap">
			{store.habilidades.map(item => {
				return (
					<button className={item.habilidad ? habStyles.active : habStyles.inactive} key={item.id.toString()}>
						<span>{item.name}</span>
					</button>
				);
			})}
		</div>
	);
};
