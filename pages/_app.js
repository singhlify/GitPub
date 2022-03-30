import Theme from "../styles/theme";
import Header from "../components/Header";
import MainWrapper from "../components/MainWrapper/MainWrapper";

function MyApp({ Component, pageProps }) {
	return (
		<Theme>
			<Header />
			<MainWrapper>
				<Component {...pageProps} />
			</MainWrapper>
		</Theme>
	);
}

export default MyApp;
