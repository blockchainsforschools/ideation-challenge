import React from 'react';
import Globe from './splash/Globe';
import BannerText from './splash/BannerText';

const SplashBanner = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Globe />
			<BannerText />
		</div>
	);
};

export default SplashBanner;
