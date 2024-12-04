import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { CardView } from "./views/cardView.jsx";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="layout__PageContainer">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<div className="layout__MainContent">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/cardView" element={<CardView />} />
							<Route path="/single/:id" element={<Single />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
					</div>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
