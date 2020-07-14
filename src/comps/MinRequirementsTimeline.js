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

const MinRequirementsTimeline = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>
					Minimum Requirements Timeline
				</h1>
				<Grid className={classes.Descriptions}>
					<GridCell span={7} tablet={5}>
						Register by
					</GridCell>
					<GridCell span={5} tablet={3}>
						August 9th
					</GridCell>

					<GridCell span={7} tablet={5}>
						Submit BMC by
					</GridCell>
					<GridCell span={5} tablet={3}>
						August 16th
					</GridCell>

					<GridCell span={7} tablet={5}>
						Submit Final by
					</GridCell>
					<GridCell span={5} tablet={3}>
						August 21st
					</GridCell>
				</Grid>
			</div>
		</div>
	);
};

export default MinRequirementsTimeline;
