import React, { useState } from "react";
import styles from "../SearchBar/searchBar.module.css";
import imgSearch from "../../Assets/search.svg";
export const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleSearch = () => {
    console.log(search);
  };
  return (
    <>
      <div className={styles}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="What are you looking for?"
            onChange={(event) => handleChange(event)}
            value={search}
            className={styles.input}
          />
          <img className={styles.inputIcon} src={imgSearch} />
        </div>
        
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
};
