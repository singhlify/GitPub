import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { Wrapper, Nav } from "./Header.styles";

const Header = () => {
	const { data: session, status } = useSession();
	const loading = status === "loading";

	return (
		<Wrapper>
			<Nav>
				<Link href="/" passHref>
					<a>
						<Image src="/images/Singhlify.svg" alt="Logo" width={128} height={51} />
					</a>
				</Link>

				{session ? (
					<Button
						onClick={signOut}
						title={session.user.email}
						className="nav__cta"
						variant="contained"
						disableElevation
					>
						Sign Out
					</Button>
				) : (
					<Button
						onClick={signIn}
						className="nav__cta"
						variant="contained"
						disableElevation
					>
						Sign In
					</Button>
				)}
			</Nav>
		</Wrapper>
	);
};

export default Header;
