import { default as NextImage } from "next/image";
import styled from "styled-components";

const CoverImage = styled.div`
	max-width: 114rem;
	width: 100%;

	span {
		position: unset !important;
	}

	img {
		object-fit: contain;
		width: 100% !important;
		height: unset !important;
		position: relative !important;
	}
`;

export default function Image(props) {
	return (
		<CoverImage>
			<NextImage {...props} layout="fill" />
		</CoverImage>
	);
}
