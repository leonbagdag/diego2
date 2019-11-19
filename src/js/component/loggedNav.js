import React from "react";
import { Link, NavLink } from "react-router-dom";

export const LoggedNav = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light shadow p-3 mb-5 rounded">
			<div className="container">
				<Link to="/" className="navbar-brand">
					App-Logo
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#loggedNavbar"
					aria-controls="loggedNavbar"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="loggedNavbar">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active ml-3">
							<Link to="/navegar" className="nav-link">
								Navegar
							</Link>
						</li>
						<li className="nav-item ml-3">
							<Link to="/controlPanel" className="nav-link">
								Panel de Control
							</Link>
						</li>
						<li className="nav-item ml-3">
							<Link
								to="/serviceForm"
								className="nav-link btn btn-primary rounded-pill"
								role="button"
								style={{ width: "150px", color: "white" }}>
								Do It For Me!
							</Link>
						</li>
						<li className="nav-item dropdown ml-3">
							<span
								className="nav-link dropdown-toggle"
								id="userProfile"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								userProfile
							</span>
							<div className="dropdown-menu" aria-labelledby="userProfile">
								<Link className="dropdown-item" to="/perfil">
									Mi Perfil
								</Link>
								<Link className="dropdown-item" to="/controlPanel">
									Mi Panel de Control
								</Link>
								<Link className="dropdown-item" to="/">
									Desconectarme
								</Link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
