import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	CenterContainer: {
		display: 'flex',
		justifyContent: 'center',
		height: '70vh'
	},
	ContentContainer: {
		width: '80vw'
	},
	Heading: {
		color: '#4cbb85',
		textAlign: 'center'
	},
	Paragraph: {
		fontWeight: 300
	}
});

const FAQ = () => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>FAQs</h1>
				<p className={classes.Paragraph}>Some content here</p>
			</div>
		</div>
	);
};

export default FAQ;
