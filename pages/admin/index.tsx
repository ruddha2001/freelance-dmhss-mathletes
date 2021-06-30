import Head from "next/head";
import React from "react";
import Login from "../../components/login/login";

export default function Admin() {
  return (
    <>
      <Head>
        <title>Mathletes Meet - Douglas Memorial H.S. School</title>
      </Head>
      <Login />
    </>
  );
}
