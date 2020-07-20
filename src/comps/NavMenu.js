import React from 'react';
import { createUseStyles } from 'react-jss';
// import { IconButton } from '@rmwc/icon-button';
import { Link } from 'react-scroll';
import '@rmwc/icon-button/styles';
import { Link as RouterLink, useLocation } from 'react-router-dom';

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
		cursor: 'pointer',
		textDecoration: 'none'
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
	const location = useLocation();

	return (
		<span className={classes.NavContainer}>
			<span className={classes.TabbedMenu}>
				<HomeLinks />

				<RouterLink
					className={classes.Tab}
					to="/getting-started"
					spy={true}
					offset={-70}
					duration={500}
				>
					Getting Started
				</RouterLink>

				<RouterLink
					className={classes.Tab}
					to="/CoC"
					spy={true}
					offset={-70}
					duration={500}
				>
					Code of Conduct
				</RouterLink>
			</span>

			<span className={classes.BurgerMenu}>
				{/*<IconButton className={classes.BurgerIcon} icon="menu" />*/}
			</span>
		</span>
	);
};

function HomeLinks() {
	const classes = useStyles();
	const location = useLocation();

	const routes = [
		{
			to: 'Overview',
			text: 'Overview'
		},
		{
			to: 'ProjectSupport',
			text: 'Project Support'
		},
		{
			to: 'timelines',
			text: 'Timelines'
		},
		{
			to: 'FAQ',
			text: 'FAQ'
		},
		{
			to: 'ChallengeSponsors',
			text: 'Challenge Sponsors'
		}
	];

	return (
		<span>
			{location.pathname === '/'
				? routes.map(page => (
						<Link
							className={classes.Tab}
							to={page.to}
							spy={true}
							offset={-70}
							duration={500}
						>
							{page.text}
						</Link>
				  ))
				: routes.map(page => (
						<RouterLink className={classes.Tab} to="/">
							{page.text}
						</RouterLink>
				  ))}
		</span>
	);
}

export default NavMenu;
