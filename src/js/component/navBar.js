import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";

const UserDropdown = () => {
	return (
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
};

const SearchDropdown = () => {
	return (
		<div className="dropdown-menu dropdown-menu-left" aria-labelledby="search-nav">
			<Link className="dropdown-item" to="/find/service-request">
				Buscar Servicio...
			</Link>
		</div>
	);
};
const MobileNavbar = props => {
	return (
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
				<SearchDropdown />
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
				<UserDropdown />
			</div>
		</div>
	);
};

const DesktopNavbar = props => {
	if (props.isLogged) {
		return (
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
					<SearchDropdown />
				</li>
				<li className="nav-item ml-3">
					<Link to="/controlPanel" className="nav-link">
						<i className="fas fa-tasks"></i>
						<span className="ml-2">Mis Servicios</span>
					</Link>
				</li>
				<li className="nav-item ml-3">
					<Link to="/service-request/form" className="nav-link">
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
									{props.userName}
									<i className="ml-2 dropdown-toggle"></i>
								</span>
							</div>
						</div>
					</span>
					<UserDropdown />
				</li>
			</ul>
		);
	} else {
		return (
			<ul className="navbar-nav ml-auto align-items-center">
				<li className="nav-item">
					<Link to="/registro" className="nav-link">
						<span>Registrarme</span>
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/login" className="nav-link">
						<span>Conectarme</span>
					</Link>
				</li>
			</ul>
		);
	}
};

export const NavBar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
			<div className={store.logged ? "container d-sm-none navbar-nav" : "d-none"}>
				{/*navbar pantalla sm si el usuario esta logged in<-*/}
				<div className="nav-item mx-auto">
					<Link to="/" className="navbar-brand">
						App-Logo
					</Link>
				</div>
				<MobileNavbar />
			</div>
			<div className={store.logged ? "container d-none d-sm-flex" : "container"}>
				{/*Navbar para md en adelante con o sin log-in-> */}
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
					<DesktopNavbar isLogged={store.logged} userName={store.user.name} />
				</div>
			</div>
		</nav>
	);
};
