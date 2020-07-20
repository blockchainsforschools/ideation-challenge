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

const Rules = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<h1 className={classes.Heading}>Rules:</h1>
				<ol className={classes.Paragraph}>
					<li>Participation </li>
					<ol type={'a'}>
						<li>
							Participants must be high school or undergraduate
							students.
						</li>
						<li>
							Non-US participants are allowed, but may be
							illegible for some prizes.
						</li>
						<li>Team sizes may range from one to four members.</li>
						<li>
							Each participant may only be a part of one team and
							have only one submission.{' '}
						</li>
					</ol>
					<li>General Submission</li>
					<ol type={'a'}>
						<li>
							All submissions must be submitted by August 21 11:59
							EDT by one member of the team.
						</li>
						<li>
							All submissions must be the original work of the
							team. Submissions must properly cite outside sources
							and must not falsely represent someone else’s work
							as their own.
						</li>
						<li>
							The final submission must consist of two parts: (1)
							a one page PDF upload and (2) a one minute YouTube
							video presentation link.
						</li>
					</ol>
					<li>Written Submission</li>
					<ol type={'a'}>
						<li>
							The written submission must include the team name
							and names of all team members.
						</li>
						<li>
							The written submission must include a 100 word
							abstract at the top of the submission.
						</li>
						<li>
							The written submission must be at maximum two pages
							in length.
						</li>
						<li>
							The written submission must be in a legible font and
							font size.
						</li>
						<li>
							The written submission must be a single PDF file.
						</li>
					</ol>

					<li>Video Submission</li>
					<ol type={'a'}>
						<li>
							The video submission must be at maximum be one
							minute in duration.
						</li>
						<li>
							The video submission must be in the form of a
							YouTube link. The YouTube video must be public or
							unlisted. Privated videos will be automatically
							disqualified.
						</li>
					</ol>
					<li>Judging</li>
					<ol type={'a'}>
						<li>
							Each submission will be judged based on the criteria
							of:
						</li>
						<li>All submissions will be judged by at least two </li>
					</ol>
					<li>
						All participants must follow the HackBFS Code of Conduct
						both within their team and on our Slack channel.
					</li>
					<li>
						HackBFS reserves the right to disqualify any team for
						any reason.
					</li>
				</ol>
				<p className={classes.Paragraph}>
					Any violation of these rules will result in that member and
					member’s team being disqualified from the challenge. If you
					suspect a violation, please report it to
					hackathon@blockchainsforschools.org.{' '}
				</p>
				<div style={{ textAlign: 'center' }}>
					<Button
						unelevated
						onClick={() =>
							window.open(
								'https://hackathonbfs.typeform.com/to/i0zS8OsY'
							)
						}
					>
						Register Here!
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Rules;
