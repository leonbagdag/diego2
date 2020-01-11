import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { BuscarServicio } from "./views/buscarServicio";
import { ControlPanel } from "./views/controlPanel";
import { ServiceForm } from "./views/serviceForm";
import { UserProfile } from "./views/userProfile";
import { ServiceView } from "./views/serviceView";
import { HabAdmin } from "./views/habAdmin";
import { Login } from "./views/loginform";

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
			<BrowserRouter>
				<ScrollToTop>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/buscar/servicio" component={BuscarServicio} />
						<Route path="/buscar/:serviceID" component={ServiceView} />
						<Route exact path="/controlPanel" component={ControlPanel} />
						<Route path="/controlPanel/habilidades" component={HabAdmin} />
						<Route path="/serviceForm" component={ServiceForm} />
						<Route path="/perfil" component={UserProfile} />
						<Route path="/login" exact component={Login} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
