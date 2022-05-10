import styled from "styled-components";

export const Article = styled.article`
	width: 100%;
	margin: 3rem auto 10rem;

	h1 {
		font-size: 4.8rem;
		margin-bottom: 1.6rem;
	}

	h2 {
		font-size: 4rem;
	}

	h3 {
		font-size: 3.2rem;
	}

	h4 {
		font-size: 2.4rem;
	}

	h5 {
		font-size: 2rem;
	}

	h6 {
		font-size: 1.6rem;
	}

	ul,
	ol {
		margin-left: 2.4rem;
		font-size: 2rem;

		li {
			list-style: unset;
		}
	}

	p,
	li {
		font-size: 1.6rem;
		line-height: 2;

		code {
			padding: 0.4rem 0.6rem;
			background-color: ${(props) => props.theme.colors.bg.inline_code};
			border-radius: 0.4rem;
		}
	}

	a {
		text-decoration: underline;
	}

	blockquote {
		border-left: 0.4rem solid ${(props) => props.theme.colors.bg.inline_code};
		padding-left: 2rem;
		font-style: italic;
	}

	img {
		max-width: 114rem;
		width: 100%;
		margin: auto;
	}

	.article__header {
		width: fit-content;
		margin: auto;

		.cover_img {
			border-radius: 1rem;
		}
	}

	.author {
		margin: 2rem 0;

		img {
			border-radius: 50%;
		}

		span:nth-child(1) {
			font-size: 2rem;
		}

		span:nth-child(2) {
			font-size: 1.6rem;
		}
	}

	.content__wrapper {
		/* display: grid;
		grid-template-rows: auto;
		column-gap: 4rem;
		row-gap: 4rem;
		width: fit-content;
		margin: 3rem auto; */

		margin: 3rem auto;
		width: 100%;

		.content__reaction {
			display: flex;
			flex-direction: column;
			row-gap: 1rem;
			justify-content: center;
			align-items: center;

			position: sticky;
			top: 4rem;

			max-width: 24rem;
			height: fit-content;

			border: 0.2rem solid ${(props) => props.theme.colors.border};
			border-radius: 2rem;
			padding: 2rem;
			margin: 4rem auto;

			h2 {
				font-size: 2rem;
			}

			p {
				font-size: 1.6rem;
			}

			button {
				width: fit-content;
				padding: 1.6rem;
			}

			svg {
				width: 3rem;
				height: 3rem;
			}
		}
	}

	.content {
		max-width: 74.6rem;
		margin: auto;

		* {
			margin-bottom: 2rem;
			word-break: break-word;
		}
	}

	@media ${(props) => props.theme.breakpoints.md} {
		p,
		li {
			font-size: 2rem;
		}
	}

	@media ${(props) => props.theme.breakpoints.lg} {
		.content__wrapper {
			display: flex;
			column-gap: 4rem;
			width: fit-content;

			.content__reaction {
				margin: 0 auto;
			}
		}
	}
`;
