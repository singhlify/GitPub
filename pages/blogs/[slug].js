import axios from "axios";
import matter from "gray-matter";
import Layout from "../../components/MicroComponents/Layout";
import Post from "../../components/Post/Post";

export default function PostPage(props) {
	return (
		<Layout>
			<Post props={props} />
		</Layout>
	);
}

export async function getStaticPaths() {
	const { data: posts } = await axios.get(process.env.BE_URL);

	const paths = posts.map((post) => {
		return {
			params: { slug: post.slug.toString() },
		};
	});

	return {
		paths: paths,
		fallback: false,
	};
}

// export async function getStaticProps({ params: { slug } }) {
export async function getStaticProps(context) {
	const slug = context.params.slug;
	const { data: posts } = await axios.get(
		`${process.env.BE_URL}/blogs/${slug}`
	);

	const { data: frontmatter, content } = matter(posts);

	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	};
}
