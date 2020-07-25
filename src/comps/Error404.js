import React from 'react';
import NotFound from '../../src/img/page-not-found-2.svg';
import { Button } from '@rmwc/button';
import { Link } from 'react-router-dom';

const Error404 = () => {
	return (
		<div
			style={{
				position: 'absolute',
				top: '20vh',
				textAlign: 'center',
				width: '100%'
			}}
		>
			<h1>That page doesn't exist</h1>

			<img
				src={NotFound}
				style={{
					width: '600px',
					maxWidth: '80vw'
				}}
				alt={
					'Woman coming out of a magnifying glass with the text 404 next to her'
				}
			/>
			<br />

			<Link to={'/'}>
				<Button outlined>Take Me Back Home</Button>
			</Link>
		</div>
	);
};

export default Error404;
