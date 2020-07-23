import React from 'react';

import { Grid, GridCell } from '@rmwc/grid';
import '@rmwc/grid/styles';

import consensysLogo from '../img/ConsenSys-logo.png';
import gitcoinLogo from '../img/Gitcoin-logo.png';
import ibmLogo from '../img/ibm-logo.png';
import builtByGirls from '../img/built-by-girls.png';
import hackDiversity from '../img/hack-diversity.png';
import digitalAsset from '../img/digital-asset.png';

function Container({ children }) {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<div style={{ width: '90vw' }}>{children}</div>
		</div>
	);
}

function SponsorCell({ alt, src, span, spanTablet, spanPhone, url, width }) {
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

	if (!spanPhone) spanPhone = 6;
	return (
		<GridCell
			span={span}
			tablet={spanTablet}
			phone={spanPhone}
			style={cellStyles}
		>
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
	return (
		<Container>
			<h1 id={'ChallengeSponsors'}>Sponsors</h1>
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
					alt={'IMB Logo'}
					src={ibmLogo}
					url={'https://ibm.com'}
					width="10rem"
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
					alt={'Digital Asset Logo'}
					src={digitalAsset}
					url={'https://www.digitalasset.com/'}
					width={'16rem'}
					span={4}
				/>

				<SponsorCell
					alt={'Gemini Logo'}
					src={
						'https://blockchainsforschools.org/supporters/gemini.png'
					}
					url={'https://gemini.com/'}
					width={'12rem'}
					span={4}
				/>
				<SponsorCell
					alt={'Hack Club Bank Logo'}
					src={
						'https://blockchainsforschools.org/hack-club-branding.png'
					}
					url={'https://hackclub.com/bank/'}
					width={'12rem'}
					span={4}
				/>
			</Grid>

			<h1>Community Partners</h1>
			<Grid>
				{/*<GridCell span={12} tablet={2} className={['desktop-only']} />*/}

				<SponsorCell
					alt="AnitaB Logo"
					url={'https://anitab.org/'}
					src={
						'https://blockchainsforschools.org/supporters/anita_b.png'
					}
					width="12rem"
					span={4}
				/>
				<SponsorCell
					alt="Built By Girls Logo"
					url={'https://builtbygirls.com'}
					src={builtByGirls}
					width="14rem"
					span={4}
				/>

				<SponsorCell
					alt="Hack Diversity Logo"
					url={'https://hackdiversity.com'}
					src={hackDiversity}
					width="14rem"
					span={4}
				/>
			</Grid>

			<p
				style={{
					textAlign: 'center'
				}}
			>
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

export default ChallengeSponsors;
