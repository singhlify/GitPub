import Link from "next/link";
import { useRouter } from "next/router";
import { Card } from "./PostCard.styles";
import {
	CardMedia,
	CardContent,
	Typography,
	CardHeader,
	Avatar,
	Chip,
} from "@mui/material";
import { useEffect } from "react";

const Post = ({
	post: { slug, cover_img, title, description, tags, created_on },
}) => {
	const router = useRouter();
	const authorImg =
		"https://blog.singhlify.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1646679970148%2Frha_b8qEf.png%3Fw%3D72%26h%3D72%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75";

	return (
		<Link
			href="/blogs/[slug]"
			as={`/blogs/${slug}`}

			// href={{
			// 	pathname: "/blogs/[slug]",
			// 	query: { slug: slug },
			// }}
			// passHref

			// onClick={() => router.push(`/blogs/${slug}`)}
		>
			{/* <Link href={`/blogs/${encodeURIComponent(slug)}`}> */}
			{/* <Link href={"/blogs/[slug]"} as={`/blogs/${slug}`} passHref> */}
			<a>
				<Card elevation={0}>
					<CardMedia
						className="card__media"
						component="img"
						image={cover_img}
						alt={title}
					/>

					<CardContent className="card__content">
						<h3>{title}</h3>
						<p>{description}</p>
					</CardContent>

					<div className="chips">
						{tags.map((tag, index) =>
							index <= 3 ? (
								<Chip
									key={index}
									label={index > 2 ? `+${tags.length - 3}` : tag}
									className="chip"
									variant="outlined"
								/>
							) : null
						)}
					</div>

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
				</Card>
			</a>
		</Link>
	);
};

export default Post;
