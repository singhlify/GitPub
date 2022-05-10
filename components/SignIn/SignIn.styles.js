import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	row-gap: 4rem;

	height: fit-content;
	
	padding: 4rem 1rem;

	/* brand logo */
	a > div {
		width: 20rem;
	}

	h1 {
		text-align: center;
		color: ${(props) => props.theme.colors.text.global};
		font-size: 3rem;
	}

	.buttons {
		width: 100%;
		margin: auto;
		max-width: 30rem;

		display: grid;
		grid-template-rows: auto;
		row-gap: 2rem;

		.button {
			display: flex;
			column-gap: 0.8rem;
			width: 100%;
			padding: 1rem;

			border-radius: 50rem;

			text-transform: unset;
			font-size: 1.6rem;
			color: ${(props) => props.theme.colors.text.button};

			/* Icons */
			& > div {
				width: 100%;
				max-width: 2.4rem;
			}
		}
	}
`;
