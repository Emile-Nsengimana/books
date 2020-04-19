import React from 'react';
import Book from "../assets/home.jpg";

const BookContainer = props => {
  return (
    <>
      <div className="box">
      <img src={Book} alt="" />
      <div className="book-details">
        <h5>World war I</h5>
      </div>
    </div>
    <div className="box">
      <img src={Book} alt="" />
      <div className="book-details">
        <h5>World war I</h5>
      </div>
    </div>
    <div className="box">
      <img src={Book} alt="" />
      <div className="book-details">
        <h5>World war I</h5>
      </div>
    </div>
    <div className="box">
      <img src={Book} alt="" />
      <div className="book-details">
        <h5>World war I</h5>
      </div>
    </div>
    </>
  );
}
export default BookContainer;