import React from 'react';
import { Button } from '@rmwc/button';
import '@rmwc/button/styles';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	TextContainer: {
		width: '500px',
		maxWidth: '100%',
		top: '15vh',
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
			bottom: '30vh',
			left: 0
		},
		'@media (max-height: 700px)': {
			TextContainer: {
				bottom: '10vh'
			}
		},
		ApplyButton: {
			textAlign: 'center'
		},
		EventDescription: {
			textAlign: 'center'
		},
		EventName: {
			textAlign: 'center'
		},
		'@media (max-width: 360px)': {
			EventName: {
				fontSize: '2rem'
			},
			TextContainer: {
				bottom: '5vh'
			}
		}
	}
});

const BannerText = () => {
	const classes = useStyles();

	return (
		<div className={classes.TextContainer}>
			<h1 className={classes.EventName}>Blockchain Ideation Challenge</h1>
			<p className={classes.EventDescription}>
				A 4-week ideation pitch competition for high school and college
				students to create innovative projects using blockchain
				technology. Sign up to learn about blockchain, the design
				process, how to create a business model canvas, and compete to
				win prizes!
			</p>

			<div className={classes.ApplyButton}>
				<Button
					unelevated
					onClick={() =>
						window.open(
							'https://hackathonbfs.typeform.com/to/i0zS8OsY'
						)
					}
				>
					Apply Now
				</Button>
			</div>
		</div>
	);
};

export default BannerText;
