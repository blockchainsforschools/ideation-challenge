import React from 'react';
import { createUseStyles } from 'react-jss';
import { Grid, GridCell } from '@rmwc/grid';

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
				<Grid className={classes.Descriptions}>
					<GridCell span={12}>
						Register by: &nbsp;&nbsp;August 9th
					</GridCell>

					<GridCell span={12}>
						Submit BMC by:&nbsp;&nbsp; August 16th
					</GridCell>

					<GridCell span={12}>
						Submit Final by: &nbsp;&nbsp;August 21st
					</GridCell>
				</Grid>
			</div>
		</div>
	);
};

export default MinRequirementsTimeline;
