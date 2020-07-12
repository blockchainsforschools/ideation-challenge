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

const ProjectSupport = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>Project Support</h1>

				<h2>HackBFS Slack</h2>
				<p className={classes.Paragraph}>
					All participants will be invited to the HackBFS Ideation
					Challenge Slack where you can meet other students, form
					teams, and get help from mentors. Students will be added to
					the Slack after registration.
				</p>

				<h2>5-Step Guide</h2>
				<p className={classes.Paragraph}>
					On our project support page, we outline a five week, five
					step plan for you to follow with guides, resources, and
					weekly checkpoints/deliverables. The weeks consist of “Step
					1: Learn About Blockchain”, “Step 2: Ideation and
					Brainstorming”, “Step 3: Creating your Business Model Canvas
					(BMC)”, “Step 4: Writing and Recording Your Pitch”, and
					“Step 5: Finalizing and Submitting”. The recommended
					timeline start date is July 20, but students can join at any
					point.
				</p>

				<p className={classes.Paragraph}>
					Following this guide is optional.
				</p>
			</div>
		</div>
	);
};

export default ProjectSupport;
