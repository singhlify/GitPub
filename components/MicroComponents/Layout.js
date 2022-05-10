import Header from "../Header/Header";
import MainWrapper from "../MainWrapper/MainWrapper";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<MainWrapper>{children}</MainWrapper>
		</>
	);
};

export default Layout;
