import React from "react";
import Head from "next/head";
import DetailedProduct from "../../components/Products/DetailedProduct/DetailedProduct";

const DetailedProductPage = () => {
  return (
    <>
      <Head>
        <title>Product Detail</title>
      </Head>
      <DetailedProduct />
    </>
  );
};

export default DetailedProductPage;
