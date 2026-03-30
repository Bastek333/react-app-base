import { Route, Routes } from "react-router";
import Biome from "../containers/Biome/Biome";
import Footer from "../containers/Footer/Footer";
import Home from "../containers/Home/Home";
import Jokes from "../containers/Jokes/Jokes";
import Navigation from "../containers/Navigation/Navigation";
import Page404 from "../containers/Page404/Page404";
import React from "../containers/React/React";
import Vite from "../containers/Vite/Vite";

import "./App.css";

function App() {
	return (
		<>
			<Navigation />
			<h1>Vite - React + React Router + Biome</h1>
			<Routes>
				<Route index element={<Home />} />
				<Route path="vite" element={<Vite />} />
				<Route path="react" element={<React />} />
				<Route path="biome" element={<Biome />} />
				<Route path="jokes" element={<Jokes />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
