import React from "react";
import SignIN from "../components/Auth/SignIn";
import Head from "next/head";

const signIn = () => {
  return (
    <>
      <Head>
        <title>User Sign In</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="signIn_container">
        <SignIN />
      </div>
    </>
  );
};

export default signIn;
