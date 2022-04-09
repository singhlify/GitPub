import styled from "styled-components";

export const Wrapper = styled.header`
	padding: 2rem 0;
`;

export const Nav = styled.nav`
	max-width: calc(144rem - 1rem);
	padding: 0 1rem;
	margin: auto;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	font-size: 1.6rem;

	.search {
		font-size: inherit;
	}

	.nav__cta {
		font-size: inherit;
		text-transform: capitalize;

		border-radius: 5rem;
	}
`;
