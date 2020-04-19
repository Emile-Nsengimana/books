import React from "react";
import BookContainer from "../components/BookContainer";
import Search from "../components/Search";

const Books = props => {
    return (
        <>
            <Search />
            <div className="book-container">
                <BookContainer />
            </div>
        </>
    );
}

export default Books;