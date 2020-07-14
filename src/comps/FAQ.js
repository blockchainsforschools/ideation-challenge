import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	CenterContainer: {
		display: 'flex',
		justifyContent: 'center',
		height: '70vh'
	},
	ContentContainer: {
		width: '80vw'
	},
	Heading: {
		color: '#4cbb85',
		textAlign: 'center'
	},
	Paragraph: {
		fontWeight: 300
	}
});

const FAQ = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>FAQ</h1>

				<h2>Who can compete?</h2>
				<p className={classes.Paragraph}>
					Any and all high school and college students can participate
					in the Challenge. You don’t have to be familiar with
					blockchain technology prior to the competition, but must be
					willing to learn!
				</p>

				<h2>What are the prizes?</h2>
				<p className={classes.Paragraph}>
					All participants will receive priority consideration for our
					in-person hackathon in 2021. Prizes also include Airpods,
					laptops, and other hardware. The full list will be announced
					later.
				</p>

				<h2>Who are the judges?</h2>
				<p className={classes.Paragraph}>
					The judges are a mix of software engineers, professors. More
					info to come later.
				</p>
			</div>
		</div>
	);
};

export default FAQ;
