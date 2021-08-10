import React from "react";
import Head from "next/head";
import ProductItem from "../components/Products/ProductItem/ProductItem";
import Button from "../components/assets/button/Button";
import SearchBar from "../components/search bar/SearchBar";
import styles from "../styles/search.module.css";
import { useRouter } from "next/dist/client/router";

const Search = () => {
  const router = useRouter();

  const goBackHandler = () => {
    router.replace("/");
  };

  return (
    <>
      <Head>
        <title>Search here</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <nav>
          <Button type="button" onClick={goBackHandler}>
            Go Back
          </Button>
          <SearchBar />
        </nav>
        <div className={styles.results__container}>
          <h2 className={styles.results__heading}>
            Start Searching any products you wish to view
          </h2>
          {/* <h2 className={styles.results__heading}>No Results Found !!</h2>
          <ul>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default Search;
