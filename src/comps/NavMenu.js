import React from 'react';
import { createUseStyles } from 'react-jss';
import { IconButton } from '@rmwc/icon-button';
import { Link } from 'react-scroll';
import '@rmwc/icon-button/styles';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
	Drawer,
	DrawerHeader,
	DrawerTitle,
	DrawerSubtitle,
	DrawerContent
} from '@rmwc/drawer';
import '@rmwc/drawer/styles';

import { List, ListItem } from '@rmwc/list';
import '@rmwc/list/styles';

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

const routes = [
	{
		to: 'Overview',
		text: 'Overview'
	},

	// {
	// 	to: '/getting-started',
	// 	text: 'Getting Started',
	// 	external: true
	// },
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
	},
	{
		to: '/CoC',
		text: 'Code of Conduct',
		external: true
	}
];

const NavMenu = () => {
	const classes = useStyles();
	const location = useLocation();
	const [menuOpen, setMenuOpen] = React.useState(false);

	return (
		<span className={classes.NavContainer}>
			<span className={classes.TabbedMenu}>
				<HomeLinks />
			</span>

			<span className={classes.BurgerMenu}>
				<IconButton
					className={classes.BurgerIcon}
					icon="menu"
					onClick={() => setMenuOpen(a => !a)}
				/>
			</span>

			<Drawer
				dir="rtl"
				modal
				open={menuOpen && window.innerWidth < 800}
				onClose={() => setMenuOpen(false)}
				style={{ position: 'fixed', top: 0 }}
			>
				{/** Set the content back to left-to-right */}
				<DrawerHeader dir="ltr">
					<DrawerTitle>Blockchains Ideation Challenge</DrawerTitle>
					<DrawerSubtitle>Blockchains For Schools</DrawerSubtitle>
				</DrawerHeader>

				<DrawerContent dir="ltr">
					<List>
						{routes.map(page =>
							location.pathname === '/' && !page.external ? (
								<Link
									to={page.to}
									spy={true}
									offset={-70}
									duration={500}
									style={{ textDecoration: 'none' }}
									onClick={() => setMenuOpen(false)}
								>
									<ListItem>{page.text}</ListItem>
								</Link>
							) : (
								<RouterLink
									to={`${page.external ? '/' : '/#'}${
										page.to
									}`}
									style={{ textDecoration: 'none' }}
									onClick={() => setMenuOpen(false)}
								>
									<ListItem>{page.text}</ListItem>
								</RouterLink>
							)
						)}
					</List>
				</DrawerContent>
			</Drawer>
		</span>
	);
};

function HomeLinks() {
	const classes = useStyles();
	const location = useLocation();

	return (
		<span>
			{routes.map(page =>
				location.pathname === '/' && !page.external ? (
					<Link
						className={classes.Tab}
						to={page.to}
						spy={true}
						offset={-70}
						duration={500}
					>
						{page.text}
					</Link>
				) : (
					<RouterLink
						className={classes.Tab}
						to={`${page.external ? '/' : '/#'}${page.to}`}
					>
						{page.text}
					</RouterLink>
				)
			)}
		</span>
	);
}

export default NavMenu;
