import Link from "next/link";

export default function Post({ post }) {
	return (
		<>
			<div className="card w-96 bg-neutral shadow-xl">
				<figure>
					<img src={post.frontmatter.cover_image} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{post.frontmatter.title}</h2>
					<div className="badge badge-outline mt-3 mb-3 p-3">
						Posted on {post.frontmatter.date}
					</div>
					<p>{post.frontmatter.excerpt}</p>
				</div>
			</div>
		</>
	);
}
