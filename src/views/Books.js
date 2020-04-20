import React, { useState } from "react";
import BookContainer from "../components/BookContainer";
import Search from "../components/Search";

const Books = props => {
    const [ searchKey, setSearchKey ] = useState("");

    const onChange = e => {
        const { value } = e.target;
        setSearchKey(value)
    }

    const handleSearch = async e => {
        e.preventDefault();
        e.stopPropagation();

        props.history.push({
            pathname: '/books',
            search: `?search=${searchKey}`,
        })
    }
    return (
        <>
            <Search onChange={onChange} onSearch={handleSearch} />
            <div className="book-container">
                <BookContainer />
            </div>
        </>
    );
}

export default Books;