import React from "react";
import useInnerWidth from "../../utils/useInnerWidth";
import { Button } from "@rmwc/button";
import "@rmwc/button/styles";
import { createUseStyles } from "react-jss";
import useInnerHeight from "../../utils/useInnerHeight";

const useStyles = createUseStyles({
	TextContainer: {
		width: ({ desktop }) => (desktop ? "500px" : `calc(100% - 2rem)`),
		maxWidth: "100%",
		top: ({ desktop }) => (desktop ? "25vh" : "unset"),
		bottom: ({ desktop }) => (desktop ? "unset" : "10vh"),
		position: "absolute",
		left: ({ desktop }) => (desktop ? "10vw" : 0),
		backgroundColor: `rgba(255, 255, 255, 0.35)`,
		padding: "1rem"
	},
	EventName: {
		fontSize: "3rem",
		color: "#4cbb85",
		textAlign: ({ desktop }) => (desktop ? "left" : "center")
	},
	EventDescription: {
		color: "grey",
		marginBottom: "2rem",
		textAlign: ({ desktop }) => (desktop ? "left" : "center")
	},
	ApplyButton: {
		textAlign: ({ desktop }) => (desktop ? "left" : "center")
	}
});

const BannerText = () => {
	const innerWidth = useInnerWidth();
	const innerHeight = useInnerHeight();

	const classes = useStyles({
		desktop: innerWidth > 720,
		innerWidth,
		innerHeight
	});

	return (
		<div className={classes.TextContainer}>
			<h1 className={classes.EventName}>Ideation Challenge</h1>
			<p className={classes.EventDescription}>
				Some quick text about the program. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>

			<div className={classes.ApplyButton}>
				<Button unelevated>Apply Now</Button>
			</div>
		</div>
	);
};

export default BannerText;
