import Link from "next/link";
import axios from "axios";
import matter from "gray-matter";
import Post from "../../components/Post/Post";

export default function PostPage(props) {
	return (
		<>
			<Post props={props} />
		</>
	);
}

export async function getServerSideProps({ params: { slug } }) {
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
