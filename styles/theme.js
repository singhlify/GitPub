import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes/default";
import GlobalStyles from "./globals";

const Theme = ({ children }) => {
	const theme = lightTheme;

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
