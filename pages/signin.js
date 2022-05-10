import { getProviders, useSession } from "next-auth/react";
import SignInContainer from "../components/SignInContainer/SignInContainer";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SignIn({ providers }) {
	const { data: session } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session) {
			router.push(router.query.callbackUrl);
		}
	}, [session]);

	return session ? (
		<div></div>
	) : (
		<SignInContainer providers={providers} />
	);
}

export async function getServerSideProps() {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}
