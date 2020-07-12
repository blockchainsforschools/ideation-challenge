import React from 'react';
import './App.css';
import AppBar from './comps/AppBar';
import SplashBanner from './comps/SplashBanner';
import ThemeProvider from './comps/ThemeProvider';
import About from './comps/About';
import Overview from './comps/Overview';
import ChallengeSponsors from './comps/ChallengeSponsors';
import ProjectSupport from './comps/ProjectSupport';

import FAQ from './comps/FAQ';

function App() {
	return (
		<ThemeProvider>
			<AppBar />
			<SplashBanner/>
			<Overview id="Overview" />
			<ChallengeSponsors id="ChallengeSponsors" />
			<ProjectSupport id="ProjectSupport" />
			<About id="About" />
			<FAQ id="FAQ" />
		</ThemeProvider>
	);
}

export default App;
