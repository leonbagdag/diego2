import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = props => {
	return (
		<div div id="myCarousel" className="carousel slide" data-ride="carousel">
			<Carousel>
				<Carousel.Item>
					<img
						className="justify-content-around w-100"
						src="https://picsum.photos/id/1/1280/500"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>DoItForMe</h3>
						<p>Que es lo que hace DoItForMe</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="justify-content-around w-100"
						src="https://picsum.photos/id/1/1280/500"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>DoItForMe</h3>
						<p>Que es los que hace DoItForMe</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="justify-content-around w-100"
						src="https://picsum.photos/id/1/1280/500"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>DoItForMe</h3>
						<p>Que es lo que hace DoItForMe</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
export default Slider;
