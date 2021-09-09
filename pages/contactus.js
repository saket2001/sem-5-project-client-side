import React from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/ContactForm/ContactForm";
import Card from "../components/card/card";

const contactus = () => {
  return (
    <Layout>
      <Card>
        <Head>
          <title>Contact Us</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <ContactForm />
      </Card>
    </Layout>
  );
};

export default contactus;
