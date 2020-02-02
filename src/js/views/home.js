import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import { Home_cards } from "../component/home_cards";
import { App_stats } from "../component/app_stats";
import { Home_carousel } from "../component/home_carousel";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// component-did-mount, fetch api to get the latest stats.-
		actions.get_stats();
	}, []);

	return (
		<div className="container-fluid px-0">
			<Home_carousel />
			<Home_cards />
			<App_stats />
		</div>
	);
};
