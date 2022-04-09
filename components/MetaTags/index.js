import Head from "next/head";

const MetaTags = ({ title, description, img, children = [] }) => {
	// const url = "";

	return (
		<Head>
			{/* HTML Meta Tags */}
			<title>{title}</title>
			<meta name="description" content={description} />

			{children.length > 0 && children}

			{/* Google / Search Engine Tags */}
			<meta itemProp="name" content={title} />
			<meta itemProp="description" content={description} />
			<meta itemProp="image" content={img} />

			{/* Facebook Meta Tags */}
			{/* <meta property="og:url" content={url} /> */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={img} />

			{/* Twitter Meta Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={img} />
		</Head>
	);
};

export default MetaTags;
