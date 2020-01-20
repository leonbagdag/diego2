import React, { Component } from "react";

const Cuerpo = props => {
	return (
		<main>
			<section className="intro">
				<h2>Sobre Nosotros</h2>
				<div>
					<p>
						La platadorma fue creada por Luis Lucena y Diego Rojas. Este proyecto surgio como el trabajo
						final del curso de Desarrollador Full-Stack de 4Geeks Academy. Nuestro interes fue realizar
						nuestras primeras incursiones como desarrolladores, aplicando las tecnologías que hoy el mercado
						demanda.
					</p>
				</div>
			</section>
			<div>
				<div className="services">
					<div className="service-one">
						<p className="service-icon">
							<i className="fas fa-money-check-alt"></i>
						</p>
						<p className="service-title">Trámines Bancarios</p>
						<p className="text-justify">
							¿No quieres ir al banco? ¿No quieres hacer largas filas? No importa! que alguien lo haga por
							ti{" "}
						</p>
						<a className="contact" href="/serviceForm">
							DoItForMe!
						</a>
					</div>
					<div className="service-two">
						<p className="service-icon">
							<i className="fas fa-balance-scale"></i>
						</p>
						<p className="service-title">Trámites Legales</p>
						<p className="text-justify">
							¿Filas en las notarias? Ni hablar, mejor que alguien más lo haga por ti.
						</p>
						<a className="contact" href="/serviceForm">
							DoItForMe!
						</a>
					</div>
					<div className="service-three">
						<p className="service-icon">
							<i className="fa fa-bolt"></i>
						</p>
						<p className="service-title">Electricidad</p>
						<p className="text-justify">
							{" "}
							Desde cambiar una ampolleta a conecciones complejas, no pierda tiempo, que alguie los haga
							por ti
						</p>
						<a className="contact" href="/serviceForm">
							DoItForMe!
						</a>
					</div>
				</div>
			</div>
			<section>
				<h2>Our Mission</h2>
				<div>
					<p>
						Integer sit amet venenatis erat. Cras elementum tortor odio, sit amet euismod nunc cursus ut.
						Donec sollicitudin orci sed enim volutpat, volutpat rutrum magna semper. Fusce leo lacus,
						pulvinar sit amet dignissim in, consectetur eget nulla. Etiam ac turpis augue. Sed tincidunt
						pulvinar tincidunt. Integer ac blandit magna. Nulla dapibus convallis luctus.{" "}
					</p>
					<p>
						Ut elementum urna sit amet elit egestas hendrerit. Vivamus quis sem fringilla, tincidunt nisi
						non, congue libero. Etiam cursus nulla quis sapien varius, eget accumsan augue mattis. Cras
						accumsan sapien nulla, eu eleifend odio tempus sit amet. Suspendisse gravida hendrerit sapien,
						ut molestie mi pellentesque eget. Aliquam eleifend velit vel libero elementum, vitae consectetur
						nisl sollicitudin. Suspendisse volutpat fringilla vehicula.
					</p>
				</div>
			</section>
		</main>
	);
};
export default Cuerpo;
