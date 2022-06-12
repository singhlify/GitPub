import Link from "next/link";
import { Wrapper, Nav } from "./Header.styles";
import logo from "../../assets/images/Singhlify.svg";
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
			</Nav>
		</Wrapper>
	);
};

export default Header;
