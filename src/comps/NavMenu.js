import React from "react";
import useInnerWidth from "../utils/useInnerWidth";

const NavMenu = () => {
	const innerWidth = useInnerWidth();

	if (innerWidth < 470) {
		return <span>a</span>;
	}

	return <span>a</span>;
};

export default NavMenu;
