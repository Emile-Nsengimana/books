import React, { useEffect, useState } from "react";
import fetchBook from "../helpers/api";
import queryString from "query-string";
import notFound from "../assets/not-found.png";
import Spinner from "../components/Spinner";

const BookContainer = (props) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = window.location.href;
  const queryObject = queryString.parse(location);
  const searchKey = queryObject[Object.keys(queryObject)[0]];

  const handleSearch = async () => {
    const bookList = await fetchBook(searchKey);
    setBooks({
      ...books,
      books: bookList.items,
    });
    setLoading(false);
  };

  useEffect(() => {
    handleSearch();
  }, [searchKey]);

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {books.books !== undefined ? (
        books.books.map((book) => (
          <div className="box" key={book.id}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            <div className="book-details">
              <ul>
                <li>
                  <b>Title:</b> {book.volumeInfo.title}
                </li>
                <li>
                  <b>author(s):</b> {book.volumeInfo.authors}
                </li>
                <li>
                  <b>publisher:</b> {book.volumeInfo.publisher}
                </li>
              </ul>
            </div>
          </div>
        ))
      ) : (
        <div className="not-found">
          <img src={notFound} alt="not found" />
          <h3>Oops! book not found</h3>
        </div>
      )}
    </>
  );
};
export default BookContainer;
