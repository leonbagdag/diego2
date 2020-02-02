import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home_cards = () => {
	const { store, actions } = useContext(Context);
	if (store.stats.users === undefined) {
		return <section className="text-center container-fluid"></section>;
	} else {
		return (
			<section className="row text-center container-fluid mt-5">
				<h5 className="col-sm-12">Los servicios más demandados:</h5>
				{store.stats.top_categories.map(item => {
					return (
						<div key={item.id.toString()} className="col-lg-3 col-sm-6 my-2">
							<div className="card h-100">
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										<i className={item.logo + " fa-2x"}></i>
									</p>
									<p className="card-text">{`Número de solicitudes: ${item.requests}`}</p>
								</div>
								<div className="card-footer">
									<Link to="/find/service-request">
										<p>Saber más...</p>
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</section>
		);
	}
};
