import axios from "axios";
import Head from "next/head";
import Post from "../components/PostCard/PostCard";
import PostsSection from "../components/PostCardsSection/PostCardsSection";

export default function Home({ posts }) {
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

export async function getStaticProps() {
	const { data: posts } = await axios.get(`${process.env.BE_URL}`);

	return {
		props: {
			posts: posts,
		},
	};
}
