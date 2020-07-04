import React from 'react';
import { Button } from '@rmwc/button';
import '@rmwc/button/styles';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	TextContainer: {
		width: '500px',
		maxWidth: '100%',
		top: '25vh',
		position: 'absolute',
		left: '10vw',
		backgroundColor: `rgba(255, 255, 255, 0.35)`,
		padding: '1rem'
	},
	EventName: {
		fontSize: '3rem',
		color: '#4cbb85',
		textAlign: 'left'
	},
	EventDescription: {
		color: 'grey',
		marginBottom: '2rem',
		textAlign: 'left'
	},
	ApplyButton: {
		textAlign: 'left'
	},
	'@media (max-width: 720px)': {
		TextContainer: {
			width: `calc(100% - 2rem)`,
			top: 'unset',
			bottom: '10vh',
			left: 0
		},
		ApplyButton: {
			textAlign: 'center'
		},
		EventDescription: {
			textAlign: 'center'
		},
		EventName: {
			textAlign: 'center'
		}
	}
});

const BannerText = () => {
	const classes = useStyles();

	return (
		<div className={classes.TextContainer}>
			<h1 className={classes.EventName}>Ideation Challenge</h1>
			<p className={classes.EventDescription}>
				Some quick text about the program. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>

			<div className={classes.ApplyButton}>
				<Button unelevated>Apply Now</Button>
			</div>
		</div>
	);
};

export default BannerText;
