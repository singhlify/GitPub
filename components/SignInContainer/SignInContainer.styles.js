import styled from "styled-components";

export const Section = styled.section`
	height: 100vh;

	& > div {
		display: none;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;

		& > div {
			display: unset;
      background-image: url("/images/signin-bg.jpg");
      background-size: cover;
		}
	}
`;
