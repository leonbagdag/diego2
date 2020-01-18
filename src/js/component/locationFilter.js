import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const LocationFilter = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card card-body">
			<p>Mi ubicación:</p>
		</div>
	);
};
