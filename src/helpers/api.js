import axios from 'axios';

 
const baseUrl = "https://www.googleapis.com/books/v1/volumes";
const key = "AIzaSyACnKV2EY8FXTOrztEhtniMZa1L9BfUzqg";

const fetchBook = async (searchKey)=> {
  const request = await axios({
    method: "GET",
    url: `${baseUrl}?q=${searchKey}?key=${key}`,
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

export default fetchBook;