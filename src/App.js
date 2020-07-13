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
import ImportantDeadlines from './comps/ImportantDeadlines';
import RecommendedTimeline from './comps/RecommendedTimeline';
import MinRequirementsTimeline from './comps/MinRequirementsTimeline';

import FAQ from './comps/FAQ';

function App() {
	return (
		<ThemeProvider>
			<AppBar />
			<SplashBanner />
			<Overview id="Overview" />
			<ChallengeSponsors id="ChallengeSponsors" />
			<ProjectSupport id="ProjectSupport" />
			<About id="About" />
			<ReadyToJoin id="ReadyToJoin" />
			<ImportantDeadlines id="ImportantDeadlines" />
			<RecommendedTimeline id="RecommendedTimeline" />
			<MinRequirementsTimeline id="MinRequirementsTimeline" />
			<FAQ id="FAQ" />
		</ThemeProvider>
	);
}

export default App;
