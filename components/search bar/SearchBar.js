import React from "react";
import styles from "./Searchbar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <label htmlFor="search">
        <input type="search" id="search" placeholder="Search by name" />
        <div className={styles.searchIcon}>
          <FaSearch style={{ fontSize: "26px", color: "#fff" }} />
        </div>
      </label>
    </div>
  );
};

export default SearchBar;
