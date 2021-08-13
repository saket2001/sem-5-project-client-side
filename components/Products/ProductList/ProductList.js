import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./productlist.module.css";

const ProductList = () => {
  return (
    <div className={styles.productList}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductList;
