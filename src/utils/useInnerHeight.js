import React from 'react';

const useInnerHeight = () => {
	const [height, setHeight] = React.useState(window.innerHeight);

	const listener = React.useCallback(() => {
		setHeight(window.innerHeight);
	}, []);

	React.useEffect(() => {
		window.addEventListener('resize', listener);

		return () => window.removeEventListener('resize', listener);
	});

	return height;
};

export default useInnerHeight;
