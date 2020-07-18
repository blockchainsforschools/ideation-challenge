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
	}
});

const RecommendedTimeline = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>Recommended Timeline</h1>

				<div className={classes.Descriptions}>
					<table>
						<tr>
							<td>Register (required):</td>
							<td>July 20 (latest by 8/10)</td>
						</tr>

						<tr>
							<td>Step 1. Learn About Blockchain:</td>
							<td>July 20 - July 26</td>
						</tr>

						<tr>
							<td>Step 2. Ideation and Brainstorming:</td>
							<td>July 27 - August 2</td>
						</tr>

						<tr>
							<td>
								Step 3. Creating your Business Model Canvas:
							</td>
							<td>August 3 - August 9</td>
						</tr>

						<tr>
							<td>Submit your BMC (required):</td>
							<td>August 9 (latest by 8/16)</td>
						</tr>

						<tr>
							<td>Step 4. Writing and Recording Your Pitch:</td>
							<td>August 10 - August 16</td>
						</tr>

						<tr>
							<td>Step 5. Finalizing and Submitting:</td>
							<td>August 16 - August 20</td>
						</tr>

						<tr>
							<td>Submit final submission! (required):</td>
							<td>August 21 11:59pm EDT</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default RecommendedTimeline;
