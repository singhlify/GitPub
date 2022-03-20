import Header from "../components/Header";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<Header />
			{/* <main className="container"> */}
			<Component {...pageProps} />
			{/* </main> */}
		</ThemeProvider>
	);
}

export default MyApp;
