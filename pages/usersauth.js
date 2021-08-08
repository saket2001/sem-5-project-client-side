import React from "react";
import SignIN from "../components/Auth/SignIn";
import Head from "next/head";

const usersAuth = () => {
  return (
    <>
      <Head>
        <title>User Authentication</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="signIn_container">
        <SignIN />
      </div>
    </>
  );
};

export default usersAuth;
