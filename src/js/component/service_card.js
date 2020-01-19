import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Service_card = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			{store.services.map(item => {
				return (
					<div key={item.id.toString()} className="card">
						<div className="row no-gutters">
							<div className="col-md-3">
								<img src="https://picsum.photos/100" alt="servie_img_1" />
							</div>
							<div className="col-md-6">
								<div className="card-body">
									<h5 className="card-title">{item.status}</h5>
									<p className="card-text">{item.description}</p>
									<p className="card-text">
										<small className="text-muted">{item.category.name}</small>
									</p>
								</div>
							</div>
							<div className="col-md-3">
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">{item.date_created}</p>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
