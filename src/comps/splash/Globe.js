import React from "react";
import useInnerWidth from "../../utils/useInnerWidth";

const Globe = () => {
	const ref = React.createRef();
	const innerWidth = useInnerWidth();
	const isDesktop = innerWidth > 720;

	React.useEffect(() => {
		if (ref.current) {
			window.VANTA.GLOBE({
				el: ref.current,
				mouseControls: true,
				touchControls: true,
				minHeight: 100.0,
				minWidth: 100.0,
				scale: 1.0,
				scaleMobile: 1.0,
				color: "#4cbb85",
				color2: "#f67c99",
				backgroundColor: 0xffffff,
				size: isDesktop ? 0.8 : 0.6
			});
		}
	}, [ref, isDesktop]);

	return (
		<div
			ref={ref}
			style={{
				top: 0,
				left: 0,
				height: "90vh",
				zIndex: -1,
				opacity: 0.7
			}}
		/>
	);
};

export default Globe;
