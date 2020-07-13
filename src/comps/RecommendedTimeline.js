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
	Descriptions: {
		fontWeight: 300,
		listStyle: 'none'
	},
	Dates: {
		fontWeight: 400,
		listStyle: 'none'
	},
	Timeline: {
		display: 'grid',
		gridTemplateColumns: '2fr 1fr'
	}
});

const RecommendedTimeline = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>Recommended Timeline</h1>

				<div class={classes.Timeline}>
					<ul className={classes.Descriptions}>
						<li>Register <b>(required)</b></li>
						<li>Step 1: Learn About Blockchain</li>
						<li>Step 2: Ideation and Brainstorming</li>
						<li>Step 3: Creating your Business Model Canvas</li>
						<li>Submit your BMC <b>(required)</b></li>
						<li>Step 4: Writing and Recording Your Pitch</li>
						<li>Step 5: Finalizing and Submitting</li>
						<li>Submit final submission! <b>(required)</b></li>
					</ul>
					<ul className={classes.Dates}>
						<li>July 20 (latest by 8/10)</li>
						<li>July 20 - July 26</li>
						<li>July 27 - August 2</li>
						<li>August 3 - August 9</li>
						<li>August 9 (latest by 8/16)</li>
						<li>August 10 - August 16</li>
						<li>August 16 - August 20</li>
						<li>August 21 11:59 EDT</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default RecommendedTimeline;
