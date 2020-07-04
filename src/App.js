import React from "react";
import "./App.css";
import AppBar from "./comps/AppBar";
import SplashBanner from "./comps/SplashBanner";
import ThemeProvider from "./comps/ThemeProvider";

function App() {
	return (
		<ThemeProvider>
			<AppBar />
			<SplashBanner />

			<h1>Hello</h1>
		</ThemeProvider>
	);
}

export default App;
