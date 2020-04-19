import React from 'react';
import wallpaper from "../assets/wallpaper.png";
import Search from "../components/Search";
import { useState, useEffect } from "react";

const Home = () => {
  const [ books, setBooks ] = useState([]);

  return (
    <div className="root-container">
      <img src={wallpaper} alt="women reading a book" />
      <Search />
    </div>
  );
}

export default Home;