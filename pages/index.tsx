import React from "react";
import Head from "next/head";

import Navbar from "../components/navbar/navbar";
import Landing from "../components/landing/landing";
import Credits from "../components/footer/credits";

function index() {
  return (
    <>
      <Head>
        <title>Mathletes - Douglas Memorial HS School</title>
      </Head>
      <Navbar />
      <Landing />
      <Credits />
    </>
  );
}

export default index;
