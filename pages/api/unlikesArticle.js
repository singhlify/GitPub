import axios from "axios";

const unlikesArticle = async (req, res) => {
	const { data } = await axios.post(
		`${process.env.BE_URL}/unlikesArticle`,
		req.body
	);
	res.status(200).json(data);
};

export default unlikesArticle;
