import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	CenterContainer: {
		display: 'flex',
		justifyContent: 'center'
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

const About = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>What is it?</h1>

				<p className={classes.Paragraph}>
					All teams will be submitting a two page business plan and
					one minute elevator pitch video (in the form of a YouTube
					link). Blockchain does not have to be the central component
					of the project, but it should be used in a unique and
					innovative way. Note this is an ideation challenge, not a
					hackathon, so no code should be submitted.{' '}
					<b>Submissions must be submitted by August 21 11:59 EDT.</b>
				</p>
			</div>
		</div>
	);
};

export default About;
