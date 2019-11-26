import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";

export const NavBar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
			<div className="container d-sm-none navbar-nav">
				{/*navbar pantallas sm <-*/}
				<div className="nav-item mx-auto">
					<Link to="/" className="navbar-brand">
						App-Logo
					</Link>
				</div>
				<div className="d-flex justify-content-around w-100">
					<div className="dropdown nav-item">
						<span
							className="nav-link"
							id="search-nav"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<i className="fas fa-search fa-2x"></i>
						</span>
						<div className="dropdown-menu dropdown-menu-left" aria-labelledby="search-nav">
							<Link className="dropdown-item" to="/buscar/servicio">
								Buscar Servicio...
							</Link>
							<div className="dropdown-divider"></div>
							<Link className="dropdown-item" to="/buscar/proveedor">
								Buscar Proveedor...
							</Link>
						</div>
					</div>
					<div className="nav-item">
						<Link to="/controlPanel" className="nav-link">
							<i className="fas fa-tasks fa-2x"></i>
						</Link>
					</div>
					<div className="nav-item">
						<Link to="/serviceForm" className="nav-link">
							<i className="fas fa-clipboard fa-2x"></i>
						</Link>
					</div>
					<div className="dropdown nav-item">
						<span
							className="nav-link "
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
				{/*Navbar para md en adelante-> */}
				<Link to="/" className="navbar-brand">
					App-Logo
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#mainNavbar"
					aria-controls="mainNavbar"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="mainNavbar">
					<ul className="navbar-nav ml-auto align-items-center">
						<li className="nav-item dropdown">
							<span
								className="nav-link"
								id="search-nav"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								<span>
									<i className="fas fa-search mr-2"></i>Buscar
									<i className="ml-2 dropdown-toggle"></i>
								</span>
							</span>
							<div className="dropdown-menu dropdown-menu-left" aria-labelledby="search-nav">
								<Link className="dropdown-item" to="/buscar/servicio">
									Servicio
								</Link>
								<div className="dropdown-divider"></div>
								<Link className="dropdown-item" to="/buscar/proveedor">
									Proveedor
								</Link>
							</div>
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
						<li className="nav-item dropdown ml-2 user-cont">
							<span
								className="nav-link"
								id="userProfile"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								<div className="d-flex align-items-center userProf-container">
									<div className="userProfile d-inline-flex"></div>
									<div className="ml-2 d-inline-flex text-align-left">
										<span className="p-0">
											{store.userName}
											<i className="ml-2 dropdown-toggle"></i>
										</span>
									</div>
								</div>
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
