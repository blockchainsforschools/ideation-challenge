import React from 'react';
import { createUseStyles } from 'react-jss';
import { GridRow, GridCell } from '@rmwc/grid';

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
					<GridRow>
						<GridCell span={12}>
							Registration deadline (to get swag
							pack):&nbsp;&nbsp; July 31
						</GridCell>

						<GridCell span={12}>
							Late registration deadline <b>(required)</b>
							:&nbsp;&nbsp; August 10
						</GridCell>

						<GridCell span={12}>
							BMC submission deadline <b>(required)</b>
							:&nbsp;&nbsp; August 16
						</GridCell>

						<GridCell span={12}>
							Submission deadline <b>(required)</b>:&nbsp;&nbsp;
							August 21, 11:59pm EDT
						</GridCell>
					</GridRow>
				</div>
			</div>
		</div>
	);
};

export default ImportantDeadlines;
