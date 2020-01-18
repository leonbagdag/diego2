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
					<p>
						Integer posuere leo non erat ornare dictum id vitae magna. Proin consectetur iaculis nisi, ut
						convallis tortor tempor congue. Curabitur sit amet tempus felis. Duis tellus eros, pellentesque
						at rhoncus eu, maximus ut diam.
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
