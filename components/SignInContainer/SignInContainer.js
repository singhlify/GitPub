import SignIn from "../SignIn/SignIn";
import { Section } from "./SignInContainer.styles";

const SignInContainer = ({ providers }) => {
	return (
		<Section>
			<SignIn providers={providers} />
			<div></div>
		</Section>
	);
};

export default SignInContainer;
