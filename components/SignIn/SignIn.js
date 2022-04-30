import { Main } from "./SignIn.styles";
import Button from "@mui/material/Button";
import Image from "../MicroComponents/Image";
import { signIn } from "next-auth/react";
import Link from "next/link";
import logo from "../../public/images/Singhlify.svg"

const SignIn = ({ providers }) => {
	return (
		<Main>
			<Link href="/" passHref>
				<a>
					<Image src={logo} alt="brand logo" />
				</a>
			</Link>

			<h1>Sign up / Log in</h1>

			<div className="buttons">
				{Object.values(providers).length &&
					Object.values(providers).map((provider) => (
						<Button
							key={provider.name}
							onClick={() => signIn(provider.id)}
							className="button"
							variant="outlined"
						>
							<Image src={`/images/${provider.id}.svg`} alt={provider.name} />
							<span>Continue with {provider.name}</span>
						</Button>
					))}
			</div>
		</Main>
	);
};

export default SignIn;
