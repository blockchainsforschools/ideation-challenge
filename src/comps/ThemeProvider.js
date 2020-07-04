import React from "react";

import { ThemeProvider as Provider } from "@rmwc/theme";

const ThemeProvider = ({ children }) => {
	return (
		<Provider
			options={{
				primary: "#4cbb85",
				secondary: "#f67c99",
				onPrimary: "white"
			}}
		>
			{children}
		</Provider>
	);
};

export default ThemeProvider;
