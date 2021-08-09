import React from "react";
import Head from "next/head";
import SellProductForm from "../components/Sell product form/SellProductForm";

const usersAuth = () => {
  return (
    <>
      <Head>
        <title>Sell Product</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="container">
        <SellProductForm />
      </main>
    </>
  );
};

export default usersAuth;
