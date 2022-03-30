import styled from "styled-components";

export const Section = styled.section`
	display: grid;
	column-gap: 5rem;
	row-gap: 5rem;

	@media ${(props) => props.theme.breakpoints.md} {
		grid-template-columns: repeat(3, 1fr);
		/* grid-template-rows: auto; */
	}
`;
