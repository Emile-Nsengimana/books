import React from 'react';

const Search = props => {
  return (
    <div className="search-box">
      <input type="text" placeholder="search any books..." />
      <button className="btn">Search</button>
    </div>
  );
}

export default Search;