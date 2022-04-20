import { SessionProvider } from "next-auth/react";
import Theme from "../styles/theme";
import Header from "../components/Header/Header";
import MainWrapper from "../components/MainWrapper/MainWrapper";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<Theme>
				<Header />
				<MainWrapper>
					<Component {...pageProps} />
				</MainWrapper>
			</Theme>
		</SessionProvider>
	);
}

export default MyApp;
