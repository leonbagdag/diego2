import React from "react";

const Card = props => {
	return (
		<div className="card text-center">
			<div className="overflow">
				<img src="https://picsum.photos/id/1/1280/500" alt="" className="card-img-top" />
			</div>
			<div className="card-body text-dark">
				<h4 className="card-title">Card Title</h4>
				<p className="card-text text-secondary">Lorem ipsum</p>
				<a href="#" className="btn btn-outline-success">
					Go Anywhare
				</a>
			</div>
		</div>
	);
};

export default Card;
