import React from 'react';
import { createUseStyles } from 'react-jss';

import consensysLogo from '../img/ConsenSys-logo.png';
import gitcoinLogo from '../img/Gitcoin-logo.png';

const useStyles = createUseStyles({
	CenterContainer: {
		display: 'flex',
		justifyContent: 'center'
	},
	ContentContainer: {
		width: '80vw',
		display: 'block',
		textAlign: 'center'
	},
	Heading: {
		color: '#4cbb85',
		textAlign: 'center'
	},
	Paragraph: {
		fontWeight: 300
	},
	ConsenSysLogo: {
		height: '65%',
		width: '30%'
	},
	GitcoinLogo: {
		height: '35%',
		width: '25%',
		padding: '4% 0px'
	}
});

const ChallengeSponsors = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>Challenge Sponsors</h1>
				<img
					className={classes.ConsenSysLogo}
					src={consensysLogo}
					alt="ConsenSys Logo"
				/>
				<img
					className={classes.GitcoinLogo}
					src={gitcoinLogo}
					alt="Gitcoin Logo"
				/>
			</div>
		</div>
	);
};

export default ChallengeSponsors;
