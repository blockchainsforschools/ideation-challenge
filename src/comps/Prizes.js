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
	Paragraph: {
		fontWeight: 300,
		textAlign: 'center'
	}
});

const Prizes = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>Prizes</h1>

				<p className={classes.Paragraph}>
					Airpods, laptops, and other hardware. Full list will be
					announced later.
				</p>
			</div>
		</div>
	);
};

export default Prizes;
