import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseUrl = process.env.REACT_APP_BASE_URL;
const key = process.env.REACT_APP_API_KEY;

export const fetchBooks = async (searchKey) => {
  const request = await axios({
    method: "GET",
    url: `${baseUrl}?q=${searchKey}?key=${key}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  try {
    return request.data;
  } catch (error) {
    return error;
  }
};

export const getBook = async (searchKey) => {
  const request = await axios({
    method: "GET",
    url: `${baseUrl}/${searchKey}?key=${key}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  try {
    return request.data;
  } catch (error) {
    return error;
  }
};
