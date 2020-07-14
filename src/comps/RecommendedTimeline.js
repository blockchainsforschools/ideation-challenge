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
						<GridCell span={12}>
							<span>Register (required):</span> &nbsp;&nbsp;{' '}
							<span style={{ textAlign: 'right' }}>
								July 20 (latest by 8/10)
							</span>
						</GridCell>

						<GridCell span={12}>
							Step 1. Learn About Blockchain: &nbsp;&nbsp;July 20
							- July 26
						</GridCell>

						<GridCell span={12}>
							Step 2. Ideation and Brainstorming: &nbsp;&nbsp;July
							27 - August 2
						</GridCell>

						<GridCell span={12} tablet={5}>
							Step 3. Creating your Business Model Canvas:
							&nbsp;&nbsp;August 3 - August 9
						</GridCell>

						<GridCell span={12}>
							Submit your BMC (required): &nbsp;&nbsp;August 9
							(latest by 8/16)
						</GridCell>

						<GridCell span={12}>
							Step 4. Writing and Recording Your Pitch:
							&nbsp;&nbsp;August 10 - August 16
						</GridCell>

						<GridCell span={12}>
							Step 5. Finalizing and Submitting:
							&nbsp;&nbsp;August 16 - August 20
						</GridCell>

						<GridCell span={12}>
							Submit final submission! (required):
							&nbsp;&nbsp;August 21 11:59pm EDT
						</GridCell>
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default RecommendedTimeline;
