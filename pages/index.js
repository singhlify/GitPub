// import fs from "fs";
// import path from "path";
import axios from "axios";
import matter from "gray-matter";
import Head from "next/head";
import { useEffect } from "react";
import Post from "../components/Post/Post";
// import { sortByDate } from "../utils";
import PostsSection from "../components/PostsSection/PostsSection";

export default function Home({ posts }) {
	useEffect(() => {
		console.log("posts >>>>", posts);
	}, [posts]);

	return (
		<>
			<Head>
				<title>Dev Blog</title>
			</Head>

			<PostsSection>
				{posts.map((post) => (
					<Post key={post._id} post={post} />
				))}
			</PostsSection>
		</>
	);
}

export async function getServerSideProps() {
	const { data: posts } = await axios.get(process.env.BE_URL);

	return {
		props: {
			posts: posts,
		},
	};
}
