import React from 'react';
import './App.css';
import AppBar from './comps/AppBar';
import SplashBanner from './comps/SplashBanner';
import ThemeProvider from './comps/ThemeProvider';
import About from './comps/About';
import Overview from './comps/Overview';
import ChallengeSponsors from './comps/ChallengeSponsors';
import ProjectSupport from './comps/ProjectSupport';
import ReadyToJoin from './comps/ReadyToJoin';

import FAQ from './comps/FAQ';
import Rules from './comps/Rules';
import Deadlines from './comps/Deadlines';

function App() {
	return (
		<ThemeProvider>
			<AppBar />
			<SplashBanner />
			<br />
			<br />

			<Overview id="Overview" />
			<br />
			<br />

			<About id="About" />
			<br />
			<br />

			<ProjectSupport id="ProjectSupport" />
			<br />
			<br />

			<Deadlines />
			<br />
			<br />

			<ChallengeSponsors id="ChallengeSponsors" />
			<br />
			<br />

			<Rules id={'Rules'} />
			<br />
			<br />

			<ReadyToJoin id="ReadyToJoin" />
			<br />
			<br />

			<FAQ id="FAQ" />
		</ThemeProvider>
	);
}

export default App;
