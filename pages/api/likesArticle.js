import axios from "axios";

const likesArticle = async (req, res) => {
	const { data } = await axios.post(
		`${process.env.BE_URL}/likesArticle`,
		req.body
	);
	res.status(200).json(data);
};

export default likesArticle;
