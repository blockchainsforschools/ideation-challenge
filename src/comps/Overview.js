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

const Overview = () => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>Overview</h1>

				<p className={classes.Paragraph}>
					HackBFS is excited to launch our Summer Blockchain Ideation
					Challenge! High school and college students have the
					opportunity to create innovative projects using blockchain
					technology. Learn about blockchain, the design process, and
					how to create a business model canvas. The final deliverable
					will be a two page business plan and a one minute elevator
					pitch video. Our partners will provide mentors to help guide
					students throughout the Challenge and judge the final
					submissions. We have over $10,000 in prizes, including
					Microsoft Surface Pros, Airpods, and other cool hardware!
				</p>
			</div>
		</div>
	);
};

export default Overview;
