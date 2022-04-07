import { Input, TextField, OutlinedInput, Button } from "@mui/material";
import Link from "next/link";
import { Wrapper, Nav } from "./Header.styles";
import logo from "../../assets/images/Singhlify.webp";
import Image from "next/image";

const Header = () => {
	return (
		<Wrapper>
			<Nav>
				<Link href="/" passHref>
					<a>
						<Image src={logo} alt="Logo" width={128} height={51} />
					</a>
				</Link>

				<OutlinedInput className="search" placeholder="Please enter text" />

				{/* <Button className="nav__cta" variant="contained" disableElevation>
					Buy me a Coffee
				</Button> */}
			</Nav>
		</Wrapper>
	);
};

export default Header;
