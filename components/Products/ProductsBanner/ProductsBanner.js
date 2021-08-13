import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import ProductList from "../ProductList/ProductList";

import styles from "./productsbanner.module.css";

const ProductsBanner = (props) => {
  return (
    <div className={styles.productsBanner}>
      <h1>{props.heading}</h1>
      <div className={styles.product__list}>
        <ProductList />
      </div>
    </div>
  );
};

export default ProductsBanner;
