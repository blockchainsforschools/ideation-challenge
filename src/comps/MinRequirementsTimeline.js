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
	Deadlines: {
		display: 'grid',
		gridTemplateColumns: '2fr 1fr'
	}
});

const MinRequirementsTimeline = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>
					Minimum Requirements Timeline
				</h1>

				<div class={classes.Deadlines}>
					<ul className={classes.Descriptions}>
						<li>Register by</li>
						<li>Submit BMC by</li>
						<li>Submit Final by </li>
					</ul>
					<ul className={classes.Dates}>
						<li>August 9th</li>
						<li>August 16th</li>
						<li>August 21st</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MinRequirementsTimeline;
