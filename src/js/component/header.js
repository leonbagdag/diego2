import React, { Component } from "react";

const Header = props => {
	return (
		<header>
			<div className="head">
				<h1>
					Do It
					<br /> For Me
				</h1>
				<div>
					<p className="text-justify">
						¿Para que hacer aquellas tareas que no quieres hacer si siempre habrá alguien que las quiera
						hacer por ti? La respuesta es facil, DoItForMe! A través de nuestra plataforma podrás delegar
						aquellas tareas que no quieres hacer. Nos basamos en el supuesto que siempe alguien tendrá las
						habilidades que tu necesitas, un trato justo, tu ganas tiempo y el resto, DINERO.
					</p>
					<div>
						<a className="contact" href="#">
							Solicita un Servicio
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
