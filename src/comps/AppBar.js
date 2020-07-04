import React from "react";
// import useInnerWidth from "../utils/useInnerWidth";
import BFSIcon from "./../img/bfs-icon.png";
import NavMenu from "./NavMenu";

const AppBar = () => {
	// const innerWidth = useInnerWidth();

	return (
		<div
			style={{
				width: `100%`,
				height: "64px",
				background: `rgba(255, 255, 255, 0.5)`,
				position: "fixed",
				zIndex: 99,
				padding: "0 9vw",
				top: 0
			}}
		>
			<span
				style={{
					color: "#4cbb85",
					fontSize: "1.5rem"
				}}
			>
				<img
					src={BFSIcon}
					alt={"Logo"}
					style={{
						height: "64px",
						display: "inline",
						verticalAlign: "middle"
					}}
				/>
				Blockchains for Schools
			</span>

			<NavMenu />
		</div>
	);
};

export default AppBar;
