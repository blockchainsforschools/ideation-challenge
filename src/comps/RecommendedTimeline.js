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

const RecommendedTimeline = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>Recommended Timeline</h1>

				<div className={classes.Descriptions}>
					<Grid>
						<GridCell span={7} tablet={5}>
							Register (required)
						</GridCell>
						<GridCell span={5} tablet={3}>
							July 20 (latest by 8/10)
						</GridCell>

						<GridCell span={7} tablet={5}>
							Step 1: Learn About Blockchain
						</GridCell>
						<GridCell span={5} tablet={3}>
							July 20 - July 26
						</GridCell>

						<GridCell span={7} tablet={5}>
							Step 2: Ideation and Brainstorming
						</GridCell>
						<GridCell span={5} tablet={3}>
							July 27 - August 2
						</GridCell>

						<GridCell span={7} tablet={5}>
							Step 3: Creating your Business Model Canvas
						</GridCell>
						<GridCell span={5} tablet={3}>
							August 3 - August 9
						</GridCell>

						<GridCell span={7} tablet={5}>
							Submit your BMC (required)
						</GridCell>
						<GridCell span={5} tablet={3}>
							August 9 (latest by 8/16)
						</GridCell>

						<GridCell span={7} tablet={5}>
							Step 4: Writing and Recording Your Pitch
						</GridCell>
						<GridCell span={5} tablet={3}>
							August 10 - August 16
						</GridCell>

						<GridCell span={7} tablet={5}>
							Step 5: Finalizing and Submitting
						</GridCell>
						<GridCell span={5} tablet={3}>
							August 16 - August 20
						</GridCell>

						<GridCell span={7} tablet={5}>
							Submit final submission! (required)
						</GridCell>
						<GridCell span={5} tablet={3}>
							August 21 11:59 EDT
						</GridCell>
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default RecommendedTimeline;
