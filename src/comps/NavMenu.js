import React from 'react';
import { createUseStyles } from 'react-jss';
import { IconButton } from '@rmwc/icon-button';
import '@rmwc/icon-button/styles';

const desktopMin = 720;

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
				<span className={classes.Tab}>About</span>
				<span className={classes.Tab}>FAQ</span>
				<span className={classes.Tab}>Apply</span>
			</span>

			<span className={classes.BurgerMenu}>
				<IconButton className={classes.BurgerIcon} icon="menu" />
			</span>
		</span>
	);
};

export default NavMenu;
