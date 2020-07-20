import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	CenterContainer: {
		display: 'flex',
		justifyContent: 'center'
	},
	ContentContainer: {
		width: '80vw',
		padding: '0 1vw'
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

const ImportantDeadlines = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>Important Deadlines</h1>

				<div className={classes.Descriptions}>
					<table>
						<tr>
							<td>Registration deadline (to get swag pack):</td>
							<td>July 31</td>
						</tr>

						<tr>
							<td>
								Late registration deadline <b>(required)</b>:
							</td>
							<td>August 10</td>
						</tr>

						<tr>
							<td>
								BMC submission deadline <b>(required)</b>:
							</td>
							<td>August 16</td>
						</tr>

						<tr>
							<td>
								Submission deadline <b>(required)</b>:
							</td>
							<td>August 21, 11:59pm EDT</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ImportantDeadlines;
