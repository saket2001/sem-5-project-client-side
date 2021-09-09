import React from "react";
import Head from "next/head";
import Layout from "../../../components/layout/Layout";
import Card from "../../../components/card/card";
import Profilepage from "../../../components/Profile/MyProfile";

const MyProfilePage = () => {
  return (
    <Layout>
      <Card>
        <Head>
          <title>My Profile</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Profilepage />
      </Card>
    </Layout>
  );
};

export default MyProfilePage;
