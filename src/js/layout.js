import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Navegar } from "./views/navegar";
import { ControlPanel } from "./views/controlPanel";
import { ServiceForm } from "./views/serviceForm";
import { UserProfile } from "./views/userProfile";
import { ServiceView } from "./views/serviceView";

import injectContext from "./store/appContext";

import { LoggedNav } from "./component/loggedNav";
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
					<LoggedNav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/navegar" component={Navegar} />
						<Route path="/navegar/:serviceID" component={ServiceView} />
						<Route path="/controlPanel" component={ControlPanel} />
						<Route path="/serviceForm" component={ServiceForm} />
						<Route path="/perfil" component={UserProfile} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
