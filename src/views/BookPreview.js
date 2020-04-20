import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import queryString from "query-string";
import { getBook } from "../helpers/api";

export const ViewBook = () => {
  const [book, setBook] = useState({
    book: "",
  });
  const [loading, setLoading] = useState(true);

  const location = window.location.href;
  const queryObject = queryString.parse(location);
  const searchKey = queryObject[Object.keys(queryObject)[0]];

  const handleBookPreview = async () => {
    const bookInfo = await getBook(searchKey);
    setBook({
      ...book,
      book: bookInfo,
    });
    setLoading(false);
  };

  useEffect(() => {
    handleBookPreview();
  }, [searchKey, loading]);

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      {book.book !== undefined ? (
        <div id="book-preview" className="popup">
          <div className="book-preview">
            <div className="preview-left">
              <img src={book.book.volumeInfo.imageLinks.thumbnail} alt="" />
              <ul>
                <li>{book.book.volumeInfo.authors}</li>
                <li>{book.book.volumeInfo.publishedDate}</li>
              </ul>
            </div>
            <div className="preview-right">
              <div className="book-title">
                <h2>{book.book.volumeInfo.title}</h2>
                <i>{book.book.volumeInfo.subtitle}</i>
              </div>
              <ul className="book-details">
                <li>
                  <b>Category: </b>
                  {book.book.volumeInfo.categories || " general"}
                </li>
                <li>
                  <b>Language: </b>
                  {book.book.volumeInfo.language}
                </li>
              </ul>
              <div className="book-desc">
                <b>Descrption</b>
                {book.book.volumeInfo.description}
              </div>
              <a className="btn-more" target="_blank" href={book.book.volumeInfo.previewLink}>More</a>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ViewBook;
