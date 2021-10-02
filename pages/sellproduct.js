import React from "react";
import Head from "next/head";
import SellProductForm from "../components/Sell product form/SellProductForm";
import Layout from "../components/layout/Layout";
import useSession from "../hooks/useSession";

const SellProduct = () => {
  useSession();

  return (
    <Layout>
      <Head>
        <title>Sell Product</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="container">
        <SellProductForm />
      </main>
    </Layout>
  );
};

export default SellProduct;
