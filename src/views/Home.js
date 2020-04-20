import React, { useState } from "react";
import wallpaper from "../assets/wallpaper.png";
import Search from "../components/Search";

const Home = (props) => {
  const [searchKey, setSearchKey] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    setSearchKey(value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    props.history.push({
      pathname: "/books",
      search: `?search=${searchKey}`,
    });
  };

  return (
    <div className="root-container">
      <img src={wallpaper} alt="women reading a book" />
      <Search onChange={onChange} onSearch={handleSearch} />
    </div>
  );
};

export default Home;
