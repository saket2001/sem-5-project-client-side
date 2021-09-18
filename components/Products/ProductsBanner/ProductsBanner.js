import React from "react";
import ProductList from "../ProductList/ProductList";
import Image from "next/image";
import notFoundImg from "../../../public/notFound.svg";

import styles from "./productsbanner.module.css";

const ProductsBanner = (props) => {
  return (
    <div className={styles.productsBanner}>
      <h1>{props.heading}</h1>
      <div className={styles.product__list}>
        {props.dataList?.length === 0 && (
          <div className="layout">
            <Image
              alt="not found image"
              src={notFoundImg}
              width="200"
              height="200"
            />
            <h1 className="error_heading">
              Oops !! No ads found for following category
            </h1>
            <p className="error_info">
              Don&apos;t worry, as new ads of this category arrives, they will
              be shown here.
            </p>
          </div>
        )}
        {props.dataList?.length > 0 && (
          <ProductList dataList={props.dataList} />
        )}
      </div>
    </div>
  );
};

export default ProductsBanner;
