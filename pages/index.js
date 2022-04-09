import axios from "axios";
import MetaTags from "../components/MetaTags";
import Post from "../components/PostCard/PostCard";
import PostsSection from "../components/PostCardsSection/PostCardsSection";
import logo from "../assets/images/Singhlify.svg";

export default function Home({ posts }) {
	const title = "Singhlify - Web Tutorials";
	const description =
		"Hi, I am Gurjot, a Full Stack Developer and this is the place where I write tutorial articles mostly based on Web Technologies like JavaScript, MERN stack, NextJs, AWS and GitHub.";

	return (
		<>
			<MetaTags title={title} description={description} img={logo.src} />

			<PostsSection>
				{posts.map((post) => (
					<Post key={post._id} post={post} />
				))}
			</PostsSection>
		</>
	);
}

export async function getStaticProps() {
	const { data: posts } = await axios.get(process.env.BE_URL);

	return {
		props: {
			posts: posts,
		},
	};
}
