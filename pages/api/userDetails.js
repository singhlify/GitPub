import axios from "axios";

const userDetails = async (req, res) => {
  const {data} = await axios.get(`${process.env.BE_URL}/userDetails?email=${req.query.email}`);
  res.status(200).json(data);
};

export default userDetails;