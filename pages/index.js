import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post/Post";
import { sortByDate } from "../utils";
import PostsSection from "../components/PostsSection/PostsSection";

export default function Home({ posts }) {
	return (
		<>
			<Head>
				<title>Dev Blog</title>
			</Head>

			<PostsSection>
				{posts.map((post, index) => (
					<Post key={index} post={post} />
				))}
			</PostsSection>
		</>
	);
}

export async function getStaticProps() {
	// Get files from the posts dir
	const files = fs.readdirSync(path.join("posts"));

	// Get slug and frontmatter from posts
	const posts = files.map((filename) => {
		// Create slug
		const slug = filename.replace(".md", "");

		// Get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join("posts", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			posts: posts.sort(sortByDate),
		},
	};
}
