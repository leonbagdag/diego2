import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Service_card = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1> hola cards </h1>
		</div>
	);
};
