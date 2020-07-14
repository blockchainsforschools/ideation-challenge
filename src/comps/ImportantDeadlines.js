import React from 'react';
import { createUseStyles } from 'react-jss';
import { Grid, GridCell } from '@rmwc/grid';

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

const ImportantDeadlines = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>Important Deadlines</h1>

				<div className={classes.Descriptions}>
					<Grid>
						<GridCell span={9} tablet={6}>
							Registration deadline (to get swag pack):
						</GridCell>
						<GridCell span={3} tablet={2}>
							July 31
						</GridCell>

						<GridCell span={9} tablet={6}>
							Late registration deadline <b>(required)</b>:
						</GridCell>
						<GridCell span={3} tablet={2}>
							August 10
						</GridCell>

						<GridCell span={9} tablet={6}>
							BMC submission deadline <b>(required)</b>:
						</GridCell>
						<GridCell span={3} tablet={2}>
							August 16
						</GridCell>

						<GridCell span={9} tablet={6}>
							Submission deadline <b>(required)</b>:
						</GridCell>
						<GridCell span={3} tablet={2}>
							August 21, 11:59pm EDT
						</GridCell>
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default ImportantDeadlines;