import React from 'react';
import { Button } from '@rmwc/button';
import '@rmwc/button/styles';
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
		fontWeight: 300
	},
	RegisterButton: {
		textAlign: 'center'
	}
});

const ReadyToJoin = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>Ready To Join?</h1>

				<p className={classes.Paragraph}>
					Register now to join the Ideation Challenge Slack, get your
					swag pack, and receive updates about the Challenge.
				</p>

				<div className={classes.RegisterButton}>
					<Button unelevated>Register Here!</Button>
				</div>
			</div>
		</div>
	);
};

export default ReadyToJoin;
