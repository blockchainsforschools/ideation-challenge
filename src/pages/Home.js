import React from 'react';
import SplashBanner from '../comps/SplashBanner';
import Overview from '../comps/Overview';
import About from '../comps/About';
import ProjectSupport from '../comps/ProjectSupport';
import Deadlines from '../comps/Deadlines';
import FAQ from '../comps/FAQ';
import ReadyToJoin from '../comps/ReadyToJoin';
import ChallengeSponsors from '../comps/ChallengeSponsors';
import Rules from '../comps/Rules';

export default function Home() {
	return (
		<div>
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

			<FAQ id="FAQ" />
			<br />
			<br />

			<ReadyToJoin id="ReadyToJoin" />
			<br />
			<br />

			<ChallengeSponsors id="ChallengeSponsors" />
			<br />
			<br />

			<Rules />
		</div>
	);
}
