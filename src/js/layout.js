import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import  Home  from "./views/Home.jsx";
import NavBar from "../js/component/NavBar.jsx"
import Favorites from "./views/Favorites.jsx"
import DataBank from "./views/DataBank.jsx"
import SingleView from "./views/SingleView.jsx"
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/databank" element={<DataBank/>} />
						<Route path="/single" element={<SingleView/>}/>
						<Route path="/favorites" element={<Favorites/>} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
