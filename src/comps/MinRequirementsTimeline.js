import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
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
				<table className={classes.Descriptions}>
					<tr>
						<td>Register by:</td>
						<td>August 9th</td>
					</tr>

					<tr>
						<td>Submit BMC by:</td>
						<td>August 16th</td>
					</tr>

					<tr>
						<td>Submit Final by:</td>
						<td>August 21st</td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default MinRequirementsTimeline;
