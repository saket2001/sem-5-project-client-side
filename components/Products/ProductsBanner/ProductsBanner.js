import React from "react";
import ProductItem from "../ProductItem/ProductItem";

import styles from "./productsbanner.module.css";

const ProductsBanner = (props) => {
  return (
    <div className={styles.productsBanner}>
      <h1>{props.heading}</h1>
      <div className={styles.product__list}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductsBanner;
