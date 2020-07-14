import React from 'react';
import { createUseStyles } from 'react-jss';
// import { IconButton } from '@rmwc/icon-button';
import { Link } from 'react-scroll';
import '@rmwc/icon-button/styles';

const desktopMin = 1180;

const useStyles = createUseStyles({
	TabbedMenu: {
		lineHeight: '64px',
		verticalAlign: 'middle'
	},
	NavContainer: {
		right: 0,
		position: 'absolute'
	},
	BurgerIcon: {
		verticalAlign: 'middle',
		height: '64px'
	},
	Tab: {
		marginLeft: '2rem',
		color: `rgba(0, 0, 0, 0.8)`,
		cursor: 'pointer'
	},
	BurgerMenu: {
		display: 'none'
	},
	[`@media (max-width: ${desktopMin}px)`]: {
		TabbedMenu: {
			display: 'none'
		},
		BurgerMenu: {
			display: 'block'
		}
	}
});

const NavMenu = () => {
	const classes = useStyles();

	return (
		<span className={classes.NavContainer}>
			<span className={classes.TabbedMenu}>
				<Link
					className={classes.Tab}
					to="Overview"
					spy={true}
					offset={-70}
					duration={500}
				>
					Overview
				</Link>
				<Link
					className={classes.Tab}
					to="ChallengeSponsors"
					spy={true}
					offset={-70}
					duration={500}
				>
					Challenge Sponsors
				</Link>
				<Link
					className={classes.Tab}
					to="ProjectSupport"
					spy={true}
					offset={-70}
					duration={500}
				>
					Project Support
				</Link>
				<Link
					className={classes.Tab}
					to="About"
					spy={true}
					offset={-70}
					duration={500}
				>
					About
				</Link>
				<Link
					className={classes.Tab}
					to="FAQ"
					spy={true}
					offset={-70}
					duration={500}
				>
					FAQ
				</Link>
			</span>

			<span className={classes.BurgerMenu}>
				{/*<IconButton className={classes.BurgerIcon} icon="menu" />*/}
			</span>
		</span>
	);
};

export default NavMenu;
