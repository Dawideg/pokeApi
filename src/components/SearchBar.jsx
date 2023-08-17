import React, { useEffect, useState } from "react";
import axios from "axios";

import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ setPhrase, phrase, setLoading, searchFunction }) => {
  return (
    <div className="search-div">
      <p className="main-caption">A sipmle pokemon react.js app</p>
      <AiOutlineSearch className="search-icon" size={30} />
      <input
        className="input-field"
        type="text"
        value={phrase}
        placeholder="Search for pokemon..."
        onChange={(e) => {
          setPhrase(e.target.value);
          searchFunction();
        }}
      />
    </div>
  );
};

export default SearchBar;
