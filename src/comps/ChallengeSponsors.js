import React from 'react';
import { createUseStyles } from 'react-jss';

import { Grid, GridCell } from '@rmwc/grid';
import '@rmwc/grid/styles';

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
		height: '100px'
	},
	GitcoinLogo: {
		height: '100px'
	},
	FlexCenter: {
		display: 'flex',
		justifyContent: 'center'
	}
});

const ChallengeSponsors = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>Challenge Sponsors</h1>
				{/*<div className={classes.FlexCenter}>*/}
				<Grid>
					<GridCell span={6}>
						<img
							className={classes.ConsenSysLogo}
							src={consensysLogo}
							alt="ConsenSys Logo"
						/>
					</GridCell>
					<GridCell span={6}>
						<img
							className={classes.GitcoinLogo}
							src={gitcoinLogo}
							alt="Gitcoin Logo"
						/>
					</GridCell>
				</Grid>
				{/*</div>*/}
			</div>
		</div>
	);
};

export default ChallengeSponsors;
