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
		font-size: 2rem;
		line-height: 2;

		code {
			padding: 0.4rem 0.6rem;
			background-color: #e5e5e5;
			border-radius: 0.4rem;
		}
	}

	a {
		text-decoration: underline;
	}

	blockquote {
		border-left: 0.4rem solid #e5e7eb;
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
	}

	.card__header {
		margin: 2rem 0;

		span:nth-child(1) {
			font-size: 2rem;
		}

		span:nth-child(2) {
			font-size: 1.6rem;
		}
	}

	.content {
		max-width: 74.6rem;
		margin: 3rem auto;

		* {
			margin-bottom: 2rem;
			word-break: break-word;
		}
	}
`;
