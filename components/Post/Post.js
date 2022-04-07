import { Article } from "./Post.styles";
import { CardHeader, Avatar } from "@mui/material";
import ReactMarkdown from "react-markdown";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = {
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || "");
		return !inline && match ? (
			<SyntaxHighlighter
				style={dracula}
				language={match[1]}
				PreTag="div"
				{...props}
			>
				{String(children).replace(/\n$/, "")}
			</SyntaxHighlighter>
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		);
	},
};

const Post = ({
	props: {
		frontmatter: { cover_img, title, description, tags, created_on },
		slug,
		content,
	},
}) => {
	const authorImg =
		"https://blog.singhlify.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1646679970148%2Frha_b8qEf.png%3Fw%3D72%26h%3D72%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75";

	return (
		<>
			<Article>
				<div className="article__header">
					<h1>{title}</h1>
					<CardHeader
						className="card__header"
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
					<img src={cover_img} alt={title} />
				</div>
				<div className="content">
					<ReactMarkdown components={CodeBlock}>{content}</ReactMarkdown>
				</div>
			</Article>
		</>
	);
};

export default Post;
