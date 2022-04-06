import { Input, TextField, OutlinedInput, Button } from "@mui/material";
import Link from "next/link";
import { Wrapper, Nav } from "./Header.styles";

const Header = () => {
	return (
		<Wrapper>
			<Nav>
				<Link href="/" passHref>
					<a>
						<h2>Dev Blog</h2>
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
