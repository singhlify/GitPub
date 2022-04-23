import { SessionProvider } from "next-auth/react";
import Theme from "../styles/theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<Theme>
					<Component {...pageProps} />
			</Theme>
		</SessionProvider>
	);
}

export default MyApp;
