import React from "react";

const Search = ({ onSearch, onChange }) => {
  return (
    <div className="search-box">
      <form onSubmit={onSearch}>
        <input
          onChange={onChange}
          type="text"
          placeholder="search any books..."
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
