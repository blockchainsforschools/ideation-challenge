import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '@rmwc/button';
import { Link } from 'react-router-dom';
import './rules.css';

import bfsIcon from './../img/bfs-icon.png';

const useStyles = createUseStyles({
	CenterContainer: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '8rem',
		marginBottom: '8rem'
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
		lineHeight: '2rem'
	}
});

const CodeOfConduct = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<Link to={'/'} style={{ textDecoration: 'none' }}>
					<Button outlined>&lt;- Back </Button>
				</Link>

				<div style={{ textAlign: 'center' }}>
					<img
						src={bfsIcon}
						alt={'Logo'}
						style={{ width: '12rem' }}
					/>
				</div>

				<h1 className={classes.Heading}>Code of Conduct: </h1>

				<h2>The Quick Version</h2>
				<p>
					We’re dedicated to providing a safe, comfortable and
					harassment-free experience for everyone, regardless of the
					following:
				</p>
				<ul>
					<li>gender</li>
					<li>gender identity and expression</li>
					<li>age</li>
					<li>sexual orientation</li>
					<li>disability</li>
					<li>physical appearance</li>
					<li>body size</li>
					<li>race</li>
					<li>ethnicity</li>
					<li>nationality</li>
					<li>religion</li>
					<li>political views</li>
					<li>previous attendance or lack of</li>
					<li>computing experience or lack of</li>
					<li>chosen programming language or tech stack</li>
				</ul>

				<br />

				<p>
					We do not tolerate harassment of event participants in any
					form. Sexual language and imagery is not appropriate,
					including the following:
				</p>

				<ul>
					<li>talks, presentations, or demos</li>
					<li>workshops</li>
					<li>any parties associated to the event</li>
					<li>social media</li>
					<li>any other online media</li>
				</ul>

				<p>
					Participants may not submit prior projects, which will be
					subject to immediate disqualification.
				</p>
				<p>
					Participants violating these rules may be sanctioned or
					expelled from the event at the discretion of the organizers.
				</p>

				<h2>The Less Quick Version</h2>

				<p>
					Harassment includes offensive verbal comments related to
					gender, gender identity and expression, age, sexual
					orientation, disability, physical appearance, body size,
					race, ethnicity, nationality, religion or political views,
					sexual images in public spaces, deliberate intimidation,
					stalking, following, photography or audio/video recording
					against reasonable consent, sustained disruption of talks or
					other events, inappropriate physical contact, and unwelcome
					sexual attention.
				</p>

				<p>
					Participants asked to stop any harassing behavior are
					expected to comply immediately.
				</p>

				<p>
					If you are being harassed, notice that someone else is being
					harassed, or have any other concerns, please contact a
					member of the staff immediately.
				</p>

				<p>
					If a participant engages in harassing behavior, the
					organizers may take any action they deem appropriate. This
					includes warning the offender, expulsion, or reporting their
					behaviour to local law enforcement.
				</p>

				<p>
					Participants may not submit prior projects, which will be
					subject to immediate disqualification.
				</p>
			</div>
		</div>
	);
};

export default CodeOfConduct;
