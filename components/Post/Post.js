import { CardHeader, Avatar, IconButton } from "@mui/material";
import ReactMarkdown from "react-markdown";
import Image from "../MicroComponents/Image";
import { CodeBlock } from "../MicroComponents/CodeBlock";
import { Article } from "./Post.styles";
import MetaTags from "../MicroComponents/MetaTags";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const authorImg =
	"https://blog.singhlify.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1646679970148%2Frha_b8qEf.png%3Fw%3D72%26h%3D72%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75";

const Post = ({
	props: {
		frontmatter: { cover_img, title, description, tags, created_on },
		content,
	},
}) => {
	const [liked, setLiked] = useState(false);
	const { data: session } = useSession();

	const updateUserReaction = async (userEmail, userReaction) => {
		try {
			await axios.post("/api/likesArticle", {
				email: userEmail,
				likesArticle: userReaction,
			});
		} catch (error) {
			// console.log("error>>>", error);
		}
	};

	const getUserDetails = async (userEmail) => {
		try {
			const {data: userDetails} = await axios.get(`/api/userDetails?email=${userEmail}`);
			setLiked(userDetails.likesArticle);
		} catch (error) {
			// console.log("error>>>", error);
		}
	};

	const handleLikedArticle = () => {
		setLiked(!liked);
		updateUserReaction(session.user.email, !liked);
	};

	useEffect(async () => {
		if (session && session.user.email) {
			await getUserDetails(session.user.email);
		}
	}, [session]);

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
							<Avatar className="avatar" alt="Gurjot Singh" src={authorImg} />
						}
						title="Gurjot Singh"
						subheader={created_on}
					/>

					<Image className="cover_img" src={cover_img} alt={title} />
				</div>

				<div className="content__wrapper">
					<div className="content">
						<ReactMarkdown components={CodeBlock}>{content}</ReactMarkdown>
					</div>

					{session && session.user.email ? (
						<div className="content__reaction">
							<h2>Liked the article?</h2>

							<IconButton onClick={handleLikedArticle} aria-label="like">
								{liked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
							</IconButton>
						</div>
					) : null}
				</div>
			</Article>
		</>
	);
};

export default Post;
