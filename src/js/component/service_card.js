import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Service_card = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row">
				{store.services.map(item => {
					return (
						<div key={item.id.toString()} className="col-lg-3 col-sm-6 my-2">
							<Link to={`/service-request/${item.id}`}>
								<div className="card h-100">
									<div className="card-body">
										<h4 className="card-title">{item.name}</h4>
										<p className="card-text">{item.description}</p>
									</div>
									<div className="card-footer">
										<p>
											{item.category.name} <i className={item.category.logo}></i>
										</p>
									</div>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};
