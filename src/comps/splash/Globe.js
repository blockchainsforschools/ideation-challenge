import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	globe: {
		top: 0,
		left: 0,
		height: '70vh',
		zIndex: -1,
		opacity: 0.7
	},
	'@media (max-height: 700px)': {
		globe: {
			height: '92vh'
		}
	}
});

const Globe = () => {
	const classes = useStyles();
	const ref = React.createRef();

	React.useEffect(() => {
		if (ref.current) {
			window.VANTA.GLOBE({
				el: ref.current,
				mouseControls: true,
				touchControls: true,
				minHeight: 100.0,
				minWidth: 100.0,
				scale: 1.0,
				scaleMobile: 1.0,
				color: '#4cbb85',
				color2: '#f67c99',
				backgroundColor: 0xffffff,
				size: window.innerWidth > 720 ? 0.8 : 0.6
			});
		}
	}, [ref]);

	return <div ref={ref} className={classes.globe} />;
};

export default Globe;
