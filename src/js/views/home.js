import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Carousel from "react-bootstrap/Carousel";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		/**
		 * EDIT THIS!
		 * This function is the equivalent to "window.onLoad", it only run once on the entire application lifetime
		 * you should do your ajax requests or fetch api requests here
		 *
		 * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
		 *
		 **/
		actions.get_stats();
	}, []);

	return (
		<div>
			<div div id="myCarousel" className="carousel slide" data-ride="carousel">
				<Carousel>
					<Carousel.Item>
						<img className="max-width: 110%" src="https://picsum.photos/id/1/1280/500" alt="First slide" />
						<Carousel.Caption>
							<h3>DoItForMe</h3>
							<p>Que es lo que hace DoItForMe</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="max-width: 110%" src="https://picsum.photos/id/1/1280/500" alt="Third slide" />

						<Carousel.Caption>
							<h3>DoItForMe</h3>
							<p>Que es los que hace DoItForMe</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="max-width: 110%" src="https://picsum.photos/id/1/1280/500" alt="Third slide" />

						<Carousel.Caption>
							<h3>DoItForMe</h3>
							<p>Que es lo que hace DoItForMe</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			{/*el cuadro de busqueda debe ser un componente, lo dejo como vista pero falta desarrollo pricipalmente datos que buscar*/}
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
				<div className="col-md-5 p-lg-5 mx-auto my-5">
					<h1 className="display-4 font-weight-normal">¿Buscas algun Servicio?</h1>
					<div className="input-group md-form form-sm form-2 pl-0">
						<input
							className="form-control my-0 py-1 red-border"
							type="text"
							placeholder="Search"
							aria-label="Search"></input>
						<div className="input-group-append">
							<span className="input-group-text red lighten-3" id="basic-text1">
								<i className="fas fa-search text-grey" aria-hidden="true"></i>
							</span>
						</div>
					</div>
				</div>
				<div className="product-device shadow-sm d-none d-md-block"></div>
				<div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
			</div>
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
				<div className="col-md-5 p-lg-5 mx-auto my-5">
					<h1 className="display-4 font-weight-normal">CARDS</h1>
				</div>
				<div className="product-device shadow-sm d-none d-md-block"></div>
				<div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
			</div>
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
				<div className="col-md-5 p-lg-5 mx-auto my-5">
					<h1 className="display-4 font-weight-normal">STATISTICS</h1>
				</div>
				<div className="product-device shadow-sm d-none d-md-block"></div>
				<div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
			</div>
		</div>
	);
};
