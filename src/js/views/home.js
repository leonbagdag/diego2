import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Cuerpo from "../component/main";
import Header from "../component/header";

export const Home = () => (
	<div className="container">
		<Header />
		<Cuerpo />
	</div>
);
