import { CardHeader, Avatar } from "@mui/material";
import ReactMarkdown from "react-markdown";
import Image from "../MicroComponents/Image";
import { CodeBlock } from "../MicroComponents/CodeBlock";
import { Article } from "./Post.styles";
import MetaTags from "../MicroComponents/MetaTags";

const Post = ({
	props: {
		frontmatter: { cover_img, title, description, tags, created_on },
		content,
	},
}) => {
	const authorImg =
		"https://blog.singhlify.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1646679970148%2Frha_b8qEf.png%3Fw%3D72%26h%3D72%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75";

	return (
		<>
			<MetaTags title={title} description={description} img={cover_img}>
				<meta name="author" content="Gurjot Singh" />
				<meta name="keywords" content={tags} />
				<meta property="twitter:creator" content="@singhlify" />
			</MetaTags>

			<Article>
				<div className="article__header">
					<h1>{title}</h1>
					<CardHeader
						className="author"
						avatar={
							<Avatar
								className="avatar"
								// sx={{ bgcolor: deepOrange[500] }}
								alt="Gurjot Singh"
								src={authorImg}
							/>
						}
						title="Gurjot Singh"
						subheader={created_on}
					/>

					<Image className="cover_img" src={cover_img} alt={title} />
				</div>

				<div className="content">
					<ReactMarkdown components={CodeBlock}>{content}</ReactMarkdown>
				</div>
			</Article>
		</>
	);
};

export default Post;
