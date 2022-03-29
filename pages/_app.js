import Theme from "../styles/theme";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
	return (
		<Theme>
			<Header />
			<main className="container">
				<Component {...pageProps} />
			</main>
		</Theme>
	);
}

export default MyApp;
