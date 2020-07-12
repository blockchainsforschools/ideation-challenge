import React from 'react';
import './App.css';
import AppBar from './comps/AppBar';
import SplashBanner from './comps/SplashBanner';
import ThemeProvider from './comps/ThemeProvider';
import About from './comps/About';
import Overview from './comps/Overview';

import FAQ from './FAQ';

function App() {
	return (
		<ThemeProvider>
			<AppBar />
			<SplashBanner />
			<Overview />
			<About />
			<FAQ />
		</ThemeProvider>
	);
}

export default App;
