import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();

const baseUrl = process.env.BASE_URL;
const key = process.env.API_KEY;

const fetchBook = async (meth, url) => {
  const request = await axios({
    method: meth,
    url: baseUrl + url + key,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
  });
  try {
    return request.data;
  } catch (error) {
    return error;
  }
};

export default { fetchBook };