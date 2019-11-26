import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Navegar } from "./views/navegar";
import { ControlPanel } from "./views/controlPanel";
import { ServiceForm } from "./views/serviceForm";
import { UserProfile } from "./views/userProfile";
import { ServiceView } from "./views/serviceView";
import { HabAdmin } from "./views/habAdmin";

import injectContext from "./store/appContext";

import { NavBar } from "./component/navBar";
import { Footer } from "./component/footer";
import { Card } from "./component/Card";
import { UserCard } from "./component/UserCard";
import { FormImputs } from "./component/FormImputs";
import { CustomButton } from "./component/CustomButton";

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
						<Route exact path="/buscar" component={Navegar} />
						<Route path="/buscar/:serviceID" component={ServiceView} />
						<Route exact path="/controlPanel" component={ControlPanel} />
						<Route path="/controlPanel/habilidades" component={HabAdmin} />
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
