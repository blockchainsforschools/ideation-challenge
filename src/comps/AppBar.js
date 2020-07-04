import React from 'react';
import BFSIcon from './../img/bfs-icon.png';
import NavMenu from './NavMenu';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	TopBar: {
		width: `100%`,
		height: '64px',
		background: `rgba(255, 255, 255, 0.5)`,
		position: 'fixed',
		zIndex: 99,
		padding: '0 9vw',
		top: 0
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
		TopBar: {
			padding: '0 2vw'
		}
	}
});

const AppBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.TopBar}>
			<span className={classes.LogoText}>
				<img src={BFSIcon} alt={'Logo'} className={classes.LogoIcon} />
				Blockchains for Schools
			</span>

			<NavMenu />
		</div>
	);
};

export default AppBar;
