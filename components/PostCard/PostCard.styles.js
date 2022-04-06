import styled from "styled-components";
import { Card as muiCard } from "@mui/material";

export const Card = styled(muiCard)`
	font-family: ${(props) => props.theme.fonts.main};
	background: ${(props) => props.theme.colors.blue};

	.card__media {
		object-fit: cover;
		border-radius: 0.8rem;
	}

	.card__content {
		font-family: inherit;
		padding: 1.6rem 0;

		h3 {
			font-style: normal;
			font-weight: 700;
			font-size: 2.2rem;
			line-height: 140%;
			padding: 0 0 1.6rem;
		}

		p {
			font-style: normal;
			font-weight: 400;
			font-size: 1.4rem;
			line-height: 140%;
			color: rgba(0, 0, 0, 0.5);
		}
	}

	.chips {
		padding: 0 0 1rem;
		display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1rem;
}

		.chip {
			font-size: 1.6rem;
		}
	}

	.card__header {
		padding: 0;

		.avatar {
			font-size: 2rem;
			background-color: ${(props) => props.theme.colors.bg.button};
		}

		span:nth-child(1) {
			font-size: 2rem;
		}

		span:nth-child(2) {
			font-size: 1.6rem;
		}
	}
`;
