import React from 'react';

import { Grid, GridCell } from '@rmwc/grid';
import '@rmwc/grid/styles';

import consensysLogo from '../img/ConsenSys-logo.png';
import gitcoinLogo from '../img/Gitcoin-logo.png';
import ibmLogo from '../img/ibm-logo.png';
import builtByGirls from '../img/built-by-girls.png';
import hackDiversity from '../img/hack-diversity.png';
import digitalAsset from '../img/digital-asset.png';
import stickerMule from '../img/sticker-mule.svg';
import akamai from '../img/akamai.png';
import ben from '../img/ben.png';

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

	if (!span) span = 2;

	if (!spanTablet) spanTablet = 2;

	if (!spanPhone) spanPhone = 2;
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
					width="10rem"
				/>

				<SponsorCell
					alt={'Gitcoin logo'}
					src={gitcoinLogo}
					url={'https://gitcoin.co/'}
					width="10rem"
				/>

				<SponsorCell
					alt={'Microsoft Logo'}
					src={
						'https://blockchainsforschools.org/microsoft-branding.png'
					}
					url={'https://www.microsoft.com'}
					width="10rem"
				/>

				<SponsorCell
					alt={'IMB Logo'}
					src={ibmLogo}
					url={'https://ibm.com'}
					width="9rem"
				/>
				<SponsorCell
					alt={'Ey Logo'}
					src={'https://blockchainsforschools.org/supporters/ey.png'}
					url={'https://www.ey.com/'}
					width={'8rem'}
				/>

				<SponsorCell
					alt={'Amazon Logo'}
					src={'https://blockchainsforschools.org/supporters/aws.png'}
					url={'https://aws.com'}
					width={'7rem'}
				/>
				<SponsorCell
					alt={'Ethereum Logo'}
					src={
						'https://blockchainsforschools.org/ethereum-branding.png'
					}
					url={'https://ethereum.org'}
					width={'8rem'}
				/>

				<SponsorCell
					alt={'Citi Logo'}
					src={
						'https://blockchainsforschools.org/supporters/citi.png'
					}
					url={'https://www.citigroup.com/citi/'}
					width={'6rem'}
				/>

				<SponsorCell
					alt={'Cisco Logo'}
					src={
						'https://blockchainsforschools.org/supporters/cisco.png'
					}
					url={'https://cisco.com/'}
					width={'8rem'}
				/>

				<SponsorCell
					alt={'Trail of Bits Logo'}
					src={
						'https://blockchainsforschools.org/supporters/trail-of-bits.png'
					}
					url={'https://www.trailofbits.com/'}
					width={'8rem'}
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

				<GridCell span={1} className={'desktop-only'} />
				<SponsorCell
					alt={'Akamai logo'}
					src={akamai}
					url={'https://akamai.com/'}
					width={'12rem'}
				/>

				<SponsorCell
					alt={'Digital Asset Logo'}
					src={digitalAsset}
					url={'https://www.digitalasset.com/'}
					width={'16rem'}
				/>

				<SponsorCell
					alt={'Gemini Logo'}
					src={
						'https://blockchainsforschools.org/supporters/gemini.png'
					}
					url={'https://gemini.com/'}
					width={'12rem'}
				/>
				<SponsorCell
					alt={'Sticker Mule logo'}
					src={stickerMule}
					url={'https://stickermule.com/'}
					width={'12rem'}
				/>
				<SponsorCell
					alt={'Hack Club Bank Logo'}
					src={
						'https://blockchainsforschools.org/hack-club-branding.png'
					}
					url={'https://hackclub.com/bank/'}
					width={'12rem'}
				/>
			</Grid>

			<h1>Community Partners</h1>
			<Grid>
				{/*<GridCell span={12} tablet={2} className={['desktop-only']} />*/}
				<SponsorCell
					alt="BEN Logo"
					url={'https://blockchainedu.org/'}
					src={ben}
					width="10rem"
					span={3}
					spanPhone={6}
				/>
				<SponsorCell
					alt="AnitaB Logo"
					url={'https://anitab.org/'}
					src={
						'https://blockchainsforschools.org/supporters/anita_b.png'
					}
					width="10rem"
					span={3}
					spanPhone={6}
				/>
				<SponsorCell
					alt="Built By Girls Logo"
					url={'https://builtbygirls.com'}
					src={builtByGirls}
					width="10rem"
					span={3}
					spanPhone={6}
				/>

				<SponsorCell
					alt="Hack Diversity Logo"
					url={'https://hackdiversity.com'}
					src={hackDiversity}
					width="10rem"
					span={3}
					spanPhone={6}
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
