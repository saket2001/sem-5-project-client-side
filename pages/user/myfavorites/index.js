import React from "react";
import Head from "next/head";
import Layout from "../../../components/layout/Layout";
import ProductList from "../../../components/Products/ProductList/ProductList";
import styles from "../../../styles/user.module.css";

const MyFavoritesPage = () => {
  return (
    <>
      <Head>
        <title>My Favorites</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <div className={styles.container}>
          {/* when nothing to show */}
          <div className={styles.message}>
            <h1>Oops No Saved Ads Found !</h1>
            <p>
              It looks like you haven't saved any ads yet. What are you waiting
              for, lets get started
            </p>
          </div>
          {/* when content available to show */}
          {/* <h1>Ads You Saved</h1>
          <ProductList /> */}
        </div>
      </Layout>
    </>
  );
};

export default MyFavoritesPage;
