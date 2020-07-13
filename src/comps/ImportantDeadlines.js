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

const ImportantDeadlines = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>Important Deadlines</h1>

				<div class={classes.Deadlines}>
					<ul className={classes.Descriptions}>
						<li>Registration deadline (to get swag pack)</li>
						<li>Late registration deadline <b>(required)</b></li>
						<li>BMC submission deadline <b>(required)</b></li>
						<li>Submission deadline <b>(required)</b></li>
					</ul>
					<ul className={classes.Dates}>
						<li>July 31</li>
						<li>August 10</li>
						<li>August 16</li>
						<li>August 21, 11:59pm EDT</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ImportantDeadlines;
