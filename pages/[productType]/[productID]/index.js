import React from "react";
import Head from "next/head";
import DetailedProduct from "../../../components/Products/DetailedProduct/DetailedProduct";
import Layout from "../../../components/layout/Layout";

const DetailedProductPage = () => {
  return (
    <Layout>
      <Head>
        <title>Product Detail</title>
      </Head>
      <DetailedProduct />
    </Layout>
  );
};

export default DetailedProductPage;
