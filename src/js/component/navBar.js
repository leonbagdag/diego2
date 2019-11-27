import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";

export const NavBar = () => {
	const { store, actions } = useContext(Context);

	const userDropdown = (
		<div className="dropdown-menu dropdown-menu-right" aria-labelledby="userProfile">
			<Link className="dropdown-item" to="/perfil">
				Mi Perfil
			</Link>
			<Link className="dropdown-item" to="/controlPanel">
				Mi Panel de Control
			</Link>
			<div className="dropdown-divider"></div>
			<span className="dropdown-item">Desconectarme</span>
		</div>
	);

	const searchDropdown = (
		<div className="dropdown-menu dropdown-menu-left" aria-labelledby="search-nav">
			<Link className="dropdown-item" to="/buscar/servicio">
				Buscar Servicio...
			</Link>
			<div className="dropdown-divider"></div>
			<Link className="dropdown-item" to="/buscar/proveedor">
				Buscar Proveedor...
			</Link>
		</div>
	);

	let loggedItems;
	if (store.user.logged) {
		loggedItems /* Items cuando el usuario está conectado*/ = (
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
					{searchDropdown}
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
									{store.user.name}
									<i className="ml-2 dropdown-toggle"></i>
								</span>
							</div>
						</div>
					</span>
					{userDropdown}
				</li>
			</ul>
		);
	} else {
		/* Items cuando el usuario está desconectado*/
		loggedItems = (
			<ul className="navbar-nav ml-auto align-items-center">
				<li className="nav-item">
					<Link to="/controlPanel" className="nav-link">
						<span>Registrarme</span>
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/serviceForm" className="nav-link">
						<span>Conectarme</span>
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/serviceForm" className="nav-link">
						<span>Ayuda</span>
					</Link>
				</li>
			</ul>
		);
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
			<div className={store.user.logged ? "container d-sm-none navbar-nav" : "d-none"}>
				{/*navbar pantalla sm si el usuario esta logged in<-*/}
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
						{searchDropdown}
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
						{userDropdown}
					</div>
				</div>
			</div>
			<div className={store.user.logged ? "container d-none d-sm-flex" : "container"}>
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
					{loggedItems}
				</div>
			</div>
		</nav>
	);
};
