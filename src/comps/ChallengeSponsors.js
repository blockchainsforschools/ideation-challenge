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

function Container({ children }) {
	return <div>{children}</div>;
}

function SponsorCell({ alt, src, span, spanTablet, url, width }) {
	const imageStyles = {
		maxWidth: '100%',
		width,
		height: '100%',
		objectFit: 'contain',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		cursor: 'pointer'
	};

	const cellStyles = {
		height: '10rem'
	};

	if (!span) span = 3;

	if (!spanTablet) spanTablet = 4;

	return (
		<GridCell span={span} tablet={spanTablet} style={cellStyles}>
			<img
				style={imageStyles}
				alt={alt}
				src={src}
				onClick={() => window.open(url)}
			/>
		</GridCell>
	);
}

function ChallengeSponsors() {
	const classes = useStyles();
	return (
		<Container>
			<h1 className={classes.Heading} id={'ChallengeSponsors'}>
				Sponsors
			</h1>
			<Grid>
				<SponsorCell
					alt={'Consensys logo'}
					src={consensysLogo}
					url={'https://consensys.net/'}
					width="15rem"
				/>

				<SponsorCell
					alt={'Gitcoin logo'}
					src={gitcoinLogo}
					url={'https://gitcoin.co/'}
					width="15rem"
				/>

				<SponsorCell
					alt={'Microsoft Logo'}
					src={
						'https://blockchainsforschools.org/microsoft-branding.png'
					}
					url={'https://www.microsoft.com'}
					width="15rem"
				/>

				<SponsorCell
					alt={'Cryptonomic Logo'}
					src={
						'https://blockchainsforschools.org/supporters/cryptonomic.png'
					}
					url={'https://cryptonomic.tech/'}
					width="13rem"
				/>
			</Grid>
			<Grid>
				<SponsorCell
					alt={'Ey Logo'}
					src={'https://blockchainsforschools.org/supporters/ey.png'}
					url={'https://www.ey.com/'}
				/>

				<SponsorCell
					alt={'Amazon Logo'}
					src={'https://blockchainsforschools.org/supporters/aws.png'}
					url={'https://aws.com'}
					width={'9rem'}
				/>

				<SponsorCell
					alt={'Ethereum Logo'}
					src={
						'https://blockchainsforschools.org/ethereum-branding.png'
					}
					url={'https://ethereum.org'}
					width={'9rem'}
				/>

				<SponsorCell
					alt={'Citi Logo'}
					src={
						'https://blockchainsforschools.org/supporters/citi.png'
					}
					url={'https://www.citigroup.com/citi/'}
					width={'7rem'}
				/>

				<SponsorCell
					alt={'Gemini Logo'}
					src={
						'https://blockchainsforschools.org/supporters/gemini.png'
					}
					url={'https://gemini.com/'}
					width={'9rem'}
				/>

				<SponsorCell
					alt={'Cisco Logo'}
					src={
						'https://blockchainsforschools.org/supporters/cisco.png'
					}
					url={'https://cisco.com/'}
					width={'10rem'}
				/>

				<SponsorCell
					alt={'Trail of Bits Logo'}
					src={
						'https://blockchainsforschools.org/supporters/trail-of-bits.png'
					}
					url={'https://www.trailofbits.com/'}
					width={'9rem'}
				/>

				<SponsorCell
					alt={'Kadena Logo'}
					src={
						'https://blockchainsforschools.org/supporters/kadena.png'
					}
					url={'https://www.kadena.io/'}
					width={'9rem'}
				/>
			</Grid>

			<Grid>
				<GridCell span={4} className={['desktop-only']} />

				<SponsorCell
					alt={'Hack Club Bank Logo'}
					src={
						'https://blockchainsforschools.org/hack-club-branding.png'
					}
					url={'https://hackclub.com/bank/'}
					width={'11rem'}
					span={4}
				/>
			</Grid>

			<h1 className={classes.Heading}>Community Partners</h1>
			<Grid>
				<GridCell span={4} className={['desktop-only']} />
				<SponsorCell
					alt="AnitaB Logo"
					url={'https://anitab.org/'}
					src={
						'https://blockchainsforschools.org/supporters/anita_b.png'
					}
					width="12rem"
					span={4}
				/>
			</Grid>

			<p className="text-center">
				<b>
					If you are interested in sponsoring/partnering with us for
					the hackathon, please email us at{' '}
					<a href="mailto: hackathon@blockchainsforschools.org!">
						hackathon@blockchainsforschools.org
					</a>
				</b>
			</p>
		</Container>
	);
}
//
// const ChallengeSponsors = ({ id }) => {
// 	const classes = useStyles();
// 	return (
// 		<div className={classes.CenterContainer} id={id}>
// 			<div className={classes.ContentContainer}>
// 				<h1 className={classes.Heading}>Challenge Sponsors</h1>
// 				{/*<div className={classes.FlexCenter}>*/}
// 				<Grid>
// 					<GridCell span={6}>
// 						<img
// 							className={classes.ConsenSysLogo}
// 							src={consensysLogo}
// 							alt="ConsenSys Logo"
// 						/>
// 					</GridCell>
// 					<GridCell span={6}>
// 						<img
// 							className={classes.GitcoinLogo}
// 							src={gitcoinLogo}
// 							alt="Gitcoin Logo"
// 						/>
// 					</GridCell>
// 				</Grid>
// 				{/*</div>*/}
// 			</div>
// 		</div>
// 	);
// };

export default ChallengeSponsors;
