import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./productlist.module.css";
import Image from "next/image";
import notFoundImg from "../../../public/notFound.svg";

const ProductList = ({ dataList, option, option2, option3 }) => {
  let content = (
    <div className="layout">
      <Image alt="not found image" src={notFoundImg} width="200" height="200" />
      <h1 className="error_heading">
        Oops !! No ads found for following category
      </h1>
      <p className="error_info">
        Don&apos;t worry, as new ads of this category arrives, they will be
        shown here.
      </p>
    </div>
  );

  if (dataList)
    content = dataList.map((data, i) => (
      <ProductItem
        key={i}
        Data={data}
        option={option}
        option2={option2}
        option3={option3}
      />
    ));

  return <div className={styles.productList}>{content}</div>;
};

export default ProductList;
