import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
	return (
		<main data-theme="dark" className="max-w-max m-auto mt-20 mb-20">
			<Head>
				<title>Dev Blog</title>
			</Head>

			<div className="grid grid-cols-3 gap-10">
				{posts.map((post, index) => (
					<Post key={index} post={post} />
				))}
			</div>
		</main>
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
