import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home_carousel = () => {
	return (
		<div id="homeCarousel" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				<li data-target="#homeCarousel" data-slide-to="0" className="active"></li>
				<li data-target="#homeCarousel" data-slide-to="1"></li>
				<li data-target="#homeCarousel" data-slide-to="2"></li>
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="https://picsum.photos/1000/300" className="d-block w-100" alt="carousel_1" />
					<div className="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img src="https://picsum.photos/1000/300" className="d-block w-100" alt="carousel_2" />
					<div className="carousel-caption d-none d-md-block">
						<h5>Second slide label</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img src="https://picsum.photos/1000/300" className="d-block w-100" alt="carousel_3" />
					<div className="carousel-caption d-none d-md-block">
						<h5>Third slide label</h5>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</div>
				</div>
			</div>
			<a className="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};
