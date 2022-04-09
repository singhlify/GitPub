import styled from "styled-components";

export const Section = styled.section`
	display: grid;
	column-gap: 4rem;
	row-gap: 5rem;
	margin: 4rem 0 6rem;

	@media ${(props) => props.theme.breakpoints.md} {
		grid-template-columns: repeat(3, 1fr);
	}
`;
