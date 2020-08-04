import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '@rmwc/button';
import { Link } from 'react-router-dom';
import './getting-started.css';

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

const GettingStarted = ({ id }) => {
	const classes = useStyles();
	return (
		<div className={classes.CenterContainer} id={id}>
			<div className={classes.ContentContainer}>
				<Link to={'/'} style={{ textDecoration: 'none' }}>
					<Button outlined>&lt;- Back </Button>
				</Link>
				<h1 className={classes.Heading}>Getting Started: </h1>

				<h3 style={{ textAlign: 'center' }}>
					Welcome to the HackBFS Summer Blockchain Ideation Challenge!
					To help you get started, we’ve outlined some action items
					below
				</h3>
				<ol style={{ fontWeight: 300, fontSize: '1rem' }}>
					<li>
						<a
							target={'_blank'}
							style={{
								textDecoration: 'underline'
							}}
							href={
								'https://hackbfs.slack.com/join/shared_invite/zt-gh2iw3i9-gO15Z473juR4M6K_LKIB6A#/'
							}
						>
							<b>Join the Slack</b>
						</a>{' '}
						- if you haven’t already, join the HackBFS Ideation
						Challenge Slack to connect with other participants,
						mentors, and HackBFS staff. Make sure to also read and
						comply with the{' '}
						<Link
							to={'/CoC'}
							style={{
								textDecoration: 'underline'
							}}
						>
							Code of Conduct
						</Link>{' '}
						when interacting with others.
					</li>

					<li>
						<b>Form a Team</b> - you may work by yourself or with a
						team consisting of up to 4 members. Check out the
						#team-formation channel on the Slack to meet new people,
						or encourage your friends to sign-up. NOTE: Every team
						member must register as an individual first. You do not
						need to declare an official team until the final
						submission on August 21, but it is recommended you
						designate a team captain to submit the BMC and weekly
						deliverables.
					</li>
					<li>
						<b>Read the Rules</b> - make sure to read and understand
						the Challenge rules. Don’t hesitate to reach out to any
						HackBFS staffer on Slack to clarify any questions!
					</li>
				</ol>

				<h1 className={classes.Heading}>Five Step Guide: </h1>

				<p style={{ fontWeight: 300 }}>
					Below find our five step guide to helping you create the
					best submission possible. This guide is designed to take you
					through five weeks of learning about blockchain, the design
					process, and how to create a business model canvas. Each
					week consists of an objective, resources, and a weekly
					deliverable submission.{' '}
					<b>
						The weekly submissions are optional, but for every
						deliverable you do submit, you will receive bonus points
						on your final submission.
					</b>{' '}
					The deadline for each weekly deliverable is the last day of
					the recommended timeline of that step.
					<br />
					<br />
					While there is a recommended timeline, you can join in at
					any time during the first three weeks of the program.
					However, there is a required submission for the business
					model canvas with a hard deadline of August 16. A failure to
					submit the BMC will disqualify any final submissions.
					<br />
					<br />
					Weekly deliverables and the BMC needs to be submitted by
					only one member of the final submission team. It is
					recommended that you designate a team captain to be in
					charge of submissions. The participant that submits the
					weekly deliverables and the BMC will be matched with the
					final team that contains that participant. If you don’t have
					a team yet for the first week, we recommend that you just
					submit independently to ensure your final team earns the
					bonus points.
				</p>
				<br />
				<br />
				<h2>Step 1: Learn About Blockchain</h2>
				<p>
					<i>Recommend timeline: July 20 - July 26</i>
				</p>

				<p>
					Take this time to learn about the fundamentals of
					blockchain: how does this technology function, what makes it
					unique, and why is it a disruptor? What are blockchain’s
					limitations and what are the current applications? By
					answering these questions and learning more about
					blockchain, you will prepare yourself to set the foundation
					for your pitch in a few weeks.
				</p>

				<p>Resources:</p>
				<p>
					<a
						href={
							'https://www.ibm.com/blockchain/what-is-blockchain'
						}
					>
						IBM What is blockchain technology?
					</a>
					<br />
					<a href={'https://blockchainhub.net/blockchain-intro/'}>
						Blockchainhub: What is Blockchain?
					</a>
					<br />
					<a
						href={
							'https://www2.deloitte.com/content/dam/Deloitte/in/Documents/strategy/in-strategy-innovation-blockchain-revolutionary-change-noexp.pdf'
						}
					>
						Deloitte: Blockchain – revolutionary change or not?
					</a>
					<br />
					<a
						href={
							'https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/blockchain-beyond-the-hype-what-is-the-strategic-business-value'
						}
					>
						McKinsey: Blockchain beyond the hype: What is the
						strategic business value?
					</a>
				</p>

				<p>
					<b>Deliverables:</b> Submit a PDF document with at least{' '}
					<b style={{ textDecoration: 'underline' }}>three</b> bullet
					points summarizing what you have learned this week. Please
					write in complete sentences.
				</p>
				<p style={{ fontWeight: 300 }}>
					Submissions are due by: July 26th, 11:59pm
				</p>
				<Button
					onClick={window.open.bind(
						null,
						'https://hackathonbfs.typeform.com/to/GJQ9ZfZQ'
					)}
					raised
				>
					Submit Week 1
				</Button>
				<br />
				<br />
				<br />

				<h2>Step 2: Ideation and Brainstorming</h2>
				<p>
					<i>Recommend timeline: July 27 - August 2</i>
				</p>

				<p>
					Now that you know what blockchain is, it is time to start
					thinking about the design process. What problem are you
					looking to solve using blockchain technology? Use design
					thinking to identify the constituency that you are looking
					to serve, define the problem statement, and brainstorm
					solutions. After a period of ideation and brainstorming,
					come to a single solution for your pitch.
				</p>
				<p>Resources: </p>
				<p>
					<a
						href={
							'https://www.interaction-design.org/literature/article/what-is-design-thinking-and-why-is-it-so-popular'
						}
					>
						What is Design Thinking and Why Is It So Popular?
					</a>
					<br />
					<a
						href={
							'https://www.leewayhertz.com/guide-to-blockchain-development-process/'
						}
					>
						Blockchain Development Process
					</a>
					<br />
					<a
						href={
							'https://www.google.com/search?sxsrf=ALeKk00Copuo65KKGxVZWMAL1TTXya-wOg%3A1594217925038&ei=xdUFX_v4Ab6qytMP8o6zmAk&q=miro+&oq=miro+&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECAAQQzIKCAAQsQMQFBCHAjIFCAAQsQMyDQgAELEDEIMBEBQQhwIyAggAMgoILhDHARCjAhAKMggIABCxAxCDATICCAAyAggAUI0TWI0TYPQUaABwAHgAgAFfiAFfkgEBMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwi77_bI7L3qAhU-lXIEHXLHDJMQ4dUDCAw&uact=5'
						}
					>
						Miro - digital whiteboard and collaboration tool{' '}
					</a>
					<br />
				</p>

				<p>
					<b>Deliverables</b>: Define a problem statement in{' '}
					<b style={{ textDecoration: 'underline' }}>one</b> to{' '}
					<b style={{ textDecoration: 'underline' }}>three</b>{' '}
					sentences, then create a bulleted list with{' '}
					<b style={{ textDecoration: 'underline' }}>five</b> to{' '}
					<b style={{ textDecoration: 'underline' }}>ten</b>{' '}
					brainstormed solutions. Submit your response as a PDF.
				</p>
				<p style={{ fontWeight: 300 }}>
					Submissions are due by: August 2nd, 11:59pm
				</p>
				<Button
					onClick={window.open.bind(
						null,
						'https://hackathonbfs.typeform.com/to/KqqB3Dwo'
					)}
					raised
				>
					Submit Week 2
				</Button>
				<br />
				<br />

				<br />
				<h2>Step 3: Creating your Business Model Canvas</h2>
				<p>
					<i>Recommend timeline: August 3 - August 9</i>
				</p>

				<p>
					After completing the problem statement and choosing a
					solution, it’s time to formalize your solution into a
					Business Model Canvas (BMC). Using the BMC template, fill in
					each of the nine business model building blocks, and think
					critically about your responses. This will help you build a
					lean startup plan that will create the structure of your
					final pitch. Don’t hesitate to reach out to a mentor on
					Slack with any questions!
				</p>

				<p>Resources:</p>
				<p>
					<a
						href={
							'https://www.google.com/url?q=https://en.wikipedia.org/wiki/Business_Model_Canvas&sa=D&ust=1595261655473000&usg=AOvVaw2oppSxKEer5n5tFl9ZsIgV'
						}
					>
						Wikipedia: Business Model Canvas
					</a>
					<br />
					<a
						href={
							'https://www.google.com/url?q=https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan&sa=D&ust=1595261655473000&usg=AOvVaw0ko2g-or97hm7-oTM68FGh'
						}
					>
						SBA: Write your business plan
					</a>
					<br />
					<a
						href={
							'https://www.google.com/url?q=https://teachmeentrepreneurship.com/business-model-canvas/%23:~:text%3DBusiness%2520Model%2520Canvas%2520(BMC)%2520is,Pigneur%252C%25202009%253A2).%26text%3DThe%2520Business%2520Model%2520Canvas%2520has,Pigneur%2520(2009%253A2).&sa=D&ust=1595261655474000&usg=AOvVaw1XsLay-jWaozL4TEax3TV5'
						}
					>
						TME: Business Model Canvas
					</a>
					<br />
					<a
						href={
							'https://www.google.com/url?q=https://www.strategyzer.com/canvas/business-model-canvas&sa=D&ust=1595261655474000&usg=AOvVaw3S5YDBcR3ki72swTlQKi01'
						}
					>
						Strategyzer
					</a>
				</p>
				<p>
					<b>Deliverable:</b> Upload your completed BMC as a PDF.
				</p>
				<p>Submissions are due by August 9th</p>
				<Button
					onClick={window.open.bind(
						null,
						'https://hackathonbfs.typeform.com/to/sNNwXvqi'
					)}
					raised
				>
					Submit Week 3
				</Button>
				<br />
				<br />

				<br />
				<h2>Step 4: Writing and Recording Your Pitch</h2>
				<p>
					<i>Recommend timeline: August 10 - August 16</i>
				</p>

				<p>
					Now it is time to write and record your pitch! For the
					written portion, start with a 100 word abstract and then
					follow the structure of the BMC writing no more than two
					pages. For the video submission, begin with creating a slide
					deck and a script, then record your pitch. Remember your
					video can only be up to one minute in length, so keep it
					short and sweet. Complete a first draft this week, and spend
					the next few days revising, improving, and finalizing the
					pitch.
				</p>

				<p>Resources:</p>
				<p>
					<a
						href={
							'https://docs.google.com/document/d/1ZYkpQUI-w-eI5kD9pFlIK-N_hF_MfyHeFpvAz1LD38E/edit?usp=sharing'
						}
					>
						Judging Rubric
					</a>
					<a
						href={
							'https://www.google.com/url?q=https://www.coxblue.com/17-things-you-need-to-consider-when-pitching-your-startup/&sa=D&ust=1595261655475000&usg=AOvVaw2NcF7Uq3bbl5SoaZAlBYI5'
						}
					>
						Cox Business: How do you pitch a startup?
					</a>
					<br />
					<a
						href={
							'https://www.google.com/url?q=https://www.gsb.stanford.edu/insights/10-steps-perfect-your-startup-pitch&sa=D&ust=1595261655476000&usg=AOvVaw1OPlW3pHScEj68aISiG89_'
						}
					>
						Stanford Business: 10 Steps to Perfect Your Startup
						Pitch
					</a>

					<br />
					<a
						href={
							'https://www.google.com/url?q=https://support.zoom.us/hc/en-us/sections/200208179-Recording&sa=D&ust=1595261655476000&usg=AOvVaw3ZmeTmKDDy6263vWvkrVND'
						}
					>
						Zoom Help Center: Recording
					</a>
				</p>
				<p>
					<b>Deliverable:</b> Submit a PDF document outlining{' '}
					<b style={{ textDecoration: 'underline' }}>five</b> or more
					improvements to your pitch that you plan to make in the
					final week.
				</p>
				<p style={{ fontWeight: 300 }}>
					Submissions are due by: July 16th, 11:59pm
				</p>
				<Button
					onClick={window.open.bind(
						null,
						'https://hackathonbfs.typeform.com/to/zIvLHqWT'
					)}
					raised
				>
					Submit Week 4
				</Button>
				<br />
				<br />

				<br />
				<h2>Step 5: Finalizing and Submitting</h2>
				<p>
					<i>Final Deadline: Friday, August 21</i>
				</p>

				<p>
					You’re almost done! It is time for the final submissions. In
					the next few days, put the finishing touches on your written
					and video pitches, reread the submission guidelines and make
					sure you are following them, and export your final
					submissions. Export your written submission as a PDF and
					upload your pitch video to YouTube (you will be providing a
					link). Note the final submission also requires you to fill
					out all your team members' names and emails they used in
					their initial registration, so have that on hand.
				</p>
				<p>
					<b>Deliverable:</b> Submit the PDF containing your final
					written submission as well as the link to your video pitch
					on YouTube. Congratulations, and thank you for competing!
				</p>
				<p style={{ fontWeight: 300 }}>
					Submissions are due by: August 21st 11:59pm
				</p>
				<Button
					onClick={window.open.bind(
						null,
						'https://hackathonbfs.typeform.com/to/NYq5aHMX'
					)}
					raised
				>
					Submit Final Deliverable
				</Button>
				<br />
				<br />
			</div>
		</div>
	);
};

export default GettingStarted;
