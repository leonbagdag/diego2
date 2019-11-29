import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => (
	<body>
		<div className="Carouse">
			<Carousel>
				<Carousel.Item>
					<img className="max-width: 110%" src="https://picsum.photos/id/1/1200/500" alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="max-width: 110%" src="https://picsum.photos/id/1/1200/500" alt="Third slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="max-width: 110%" src="https://picsum.photos/id/1/1200/500" alt="Third slide" />

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
		<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
			<div className="col-md-5 p-lg-5 mx-auto my-5">
				<h1 className="display-4 font-weight-normal">STATISTICS</h1>
			</div>
			<div className="product-device shadow-sm d-none d-md-block"></div>
			<div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
		</div>
		<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
			<div className="col-md-5 p-lg-5 mx-auto my-5">
				<h1 className="display-4 font-weight-normal">SEARCH</h1>
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
	</body>
);
