import Image from "next/image";
import styled from "styled-components";

export default (props) => {
	return (
		<CoverImage>
			<Image {...props} layout="fill" />
		</CoverImage>
	);
};

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
