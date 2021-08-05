import React from "react";

import styles from "./Searchbar.module.css";
import searchLogo from "../../public/search.svg";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <label htmlFor="search">
        <input type="search" id="search" />
        <div className={styles.searchIcon}>
          <Image
            src={searchLogo}
            alt="search icon"
            width="30px"
            height="26px"
          />
        </div>
      </label>
    </div>
  );
};

export default SearchBar;
