import React from 'react';
import BFSIcon from './../img/bfs-icon.png';
import NavMenu from './NavMenu';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	TopBar: {
		width: `100%`,
		height: '64px',
		background: ({ fill }) => `rgba(255, 255, 255, ${fill ? 1 : 0.6})`,
		position: 'fixed',
		zIndex: 99,
		top: 0
	},
	InnerBar: {
		position: 'relative',
		width: 'calc(100% - 20vw)',
		marginLeft: '10vw'
	},
	LogoText: {
		color: '#4cbb85',
		fontSize: '1.5rem'
	},
	LogoIcon: {
		height: '64px',
		display: 'inline',
		verticalAlign: 'middle'
	},
	'@media (max-width: 720px)': {
		InnerBar: {
			width: 'calc(100% - 4vw)',
			marginLeft: '2vw'
		}
	}
	// '@media (max-width: 500px)': {
	// 	LogoIcon: {
	// 		height: '40px'
	// 	},
	// 	LogoText: {
	// 		fontSize: '1rem',
	// 		lineHeight: '64px'
	// 	}
	// }
});

const AppBar = () => {
	const [fill, setFill] = React.useState(window.scrollY > 0);
	const classes = useStyles({ fill });

	React.useEffect(() => {
		window.onscroll = () => {
			const shouldFill = window.scrollY > 0;
			if (fill !== shouldFill) {
				setFill(shouldFill);
			}
		};
	}, [fill]);

	return (
		<div className={classes.TopBar}>
			<div className={classes.InnerBar}>
				<span className={classes.LogoText}>
					<img
						src={BFSIcon}
						alt={'Logo'}
						className={classes.LogoIcon}
					/>
					HackBFS
				</span>

				<NavMenu />
			</div>
		</div>
	);
};

export default AppBar;
