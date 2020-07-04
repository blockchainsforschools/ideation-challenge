import React from "react";

const useInnerWidth = () => {
	const [width, setWidth] = React.useState(window.innerWidth);

	const listener = React.useCallback(() => {
		setWidth(window.innerWidth);
	}, []);

	React.useEffect(() => {
		window.addEventListener("resize", listener);

		return () => window.removeEventListener("resize", listener);
	});

	return width;
};

export default useInnerWidth;
