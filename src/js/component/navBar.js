import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
			<div className="container d-sm-none">
				<div className="">
					<Link to="/" className="navbar-brand">
						App-Logo
					</Link>
				</div>
				<div className="d-flex justify-content-around w-100">
					<div className=" active">
						<Link to="/navegar" className="nav-link">
							<i className="fas fa-search fa-2x"></i>
						</Link>
					</div>
					<div className="">
						<Link to="/controlPanel" className="nav-link">
							<i className="fas fa-tasks fa-2x"></i>
						</Link>
					</div>
					<div className="">
						<Link to="/serviceForm" className="nav-link">
							<i className="fas fa-clipboard fa-2x"></i>
						</Link>
					</div>
					<div className=" dropdown">
						<span
							className="nav-link"
							id="userProfile"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<div className="userProfile"></div>
						</span>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="userProfile">
							<Link className="dropdown-item" to="/perfil">
								Mi Perfil
							</Link>
							<Link className="dropdown-item" to="/controlPanel">
								Mi Panel de Control
							</Link>
							<div className="dropdown-divider"></div>
							<Link className="dropdown-item" to="/">
								Desconectarme
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="container d-none d-sm-flex">
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
					<ul className="navbar-nav ml-auto text-center">
						<li className="nav-item active ml-3 mainNav-item">
							<Link to="/navegar" className="nav-link">
								<i className="fas fa-search"></i>
								<span className="ml-2">Buscar</span>
							</Link>
						</li>
						<li className="nav-item ml-3">
							<Link to="/controlPanel" className="nav-link">
								<i className="fas fa-tasks"></i>
								<span className="ml-2">Mis Servicios</span>
							</Link>
						</li>
						<li className="nav-item ml-3">
							<Link to="/serviceForm" className="nav-link">
								<i className="fas fa-clipboard"></i>
								<span className="ml-2">Solicitar un Servicio</span>
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
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="userProfile">
								<Link className="dropdown-item" to="/perfil">
									Mi Perfil
								</Link>
								<Link className="dropdown-item" to="/controlPanel">
									Mi Panel de Control
								</Link>
								<div className="dropdown-divider"></div>
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
