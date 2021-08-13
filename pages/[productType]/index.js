import React from "react";
import Head from "next/head";

import Layout from "../../components/layout/Layout";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styles from "../../styles/product.module.css";
import ProductList from "../../components/Products/ProductList/ProductList";
import Button from "../../components/assets/button/Button";
import InputCheckbox from "../../components/assets/formField/InputCheckbox";

const ProductPage = () => {
  const router = useRouter();
  const productCategoryTitle = router.query.productType;

  return (
    <>
      <Head>
        <title>Shop By Category</title>
      </Head>
      <Layout>
        <div className={styles.info__block}>
          <Link href="/" passHref>
            <p>Home / {productCategoryTitle}</p>
          </Link>
        </div>
        <main className={styles.main}>
          <div className={styles.filter__container}>
            <h2>Filters</h2>
            <br />
            <p>By Price</p>
            <InputCheckbox label="below 1000" />
            <InputCheckbox label="2000 to 4000" />
            <InputCheckbox label="above 5000" />
            <br />
            <hr />
            <br />
            <p>By Location</p>
            <InputCheckbox label="Maharashtra" />
            <InputCheckbox label="Kerala" />
            <InputCheckbox label="Delhi" />
            <InputCheckbox label="J&K" />
            <InputCheckbox label="North" />
            <InputCheckbox label="Rajasthan" />
            <InputCheckbox label="Gujarat" />
            <InputCheckbox label="Bangalore" />
            <InputCheckbox label="Kolkata" />
          </div>
          <div className={styles.products__container}>
            <div className={styles.info__block}>
              <p>
                <b>8</b> ads Found
              </p>
              <Button>Sort Date By- Asc </Button>
            </div>
            <ProductList />
            <ProductList />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;
