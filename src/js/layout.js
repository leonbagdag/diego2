import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { BuscarServicio } from "./views/buscarServicio";
import { ControlPanel } from "./views/controlPanel";
import { ServiceForm } from "./views/serviceForm";
import { UserProfile } from "./views/profile";
import { ServiceView } from "./views/serviceView";
import { HabAdmin } from "./views/habAdmin";
import { Login } from "./views/login";
import { Registro } from "./views/registro";
import history from "./views/history";

import injectContext from "./store/appContext";

import { NavBar } from "./component/navBar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<Router history={history}>
				<ScrollToTop>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/registro" component={Registro} />
						<Route exact path="/service-request/form" component={ServiceForm} />
						<Route exact path="/service-request/:serviceID" component={ServiceView} />
						<Route path="/find/service-request" component={BuscarServicio} />
						<Route exact path="/controlPanel" component={ControlPanel} />
						<Route path="/controlPanel/habilidades" component={HabAdmin} />
						<Route path="/perfil" component={UserProfile} />
						<Router render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</Router>
		</div>
	);
};

export default injectContext(Layout);
