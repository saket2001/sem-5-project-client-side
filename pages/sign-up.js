import React from "react";
import SignUp from "../components/Auth/SignUp";
import Head from "next/head";

export default function signUp() {
  return (
    <>
      <Head>
        <title>User Sign Up</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <div className="signIn_container"> */}
      <SignUp />
      {/* </div> */}
    </>
  );
}
