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

const About = () => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>About</h1>

				<h2>What is it?</h2>
				<p className={classes.Paragraph}>
					A competition in which students will work in groups of 1 to
					4 to ideate a project or business utilizing blockchain
					technology and create a short slide deck for submission
					(example if we want to be more business focused). Students
					may submit anytime during the submission period (all of
					July). Submissions will be reviewed by our team and the top
					thirty teams will have the opportunity to present their
					project within four minutes to a panel of judges during our
					pitch competition.
				</p>

				<h2>Why?</h2>
				<p className={classes.Paragraph}>
					This will act as a replacement for the Summer Immersion
					program and serve as a pipeline for the physical hackathon.
					This will also help to engage sponsors as they can serve as
					mentors/judges and see a deliverable program as a result of
					their contribution. We may also offer resume drops and other
					engagement opportunities for sponsors.
				</p>

				<h2>Who?</h2>
				<p className={classes.Paragraph}>
					Open to all high school and undergraduate students. Serving
					as a pipeline to the hackathon, we want to focus outreach
					efforts to programmers. Students will not need prior
					blockchain experience as only an idea is needed, which is
					perfect for beginners. In addition, business students may
					also serve as another target demographic as they will be
					interested in the pitch competition especially if we want to
					make it startup oriented.
				</p>
			</div>
		</div>
	);
};

export default About;
