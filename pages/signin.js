import { getProviders} from "next-auth/react";
import SignInContainer from "../components/SignInContainer/SignInContainer";

export default function SignIn({ providers }) {

	return <SignInContainer providers={providers} />;
}

export async function getServerSideProps() {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}
