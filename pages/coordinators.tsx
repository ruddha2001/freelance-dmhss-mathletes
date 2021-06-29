import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Credits from "../components/footer/credits";
import CoordinatorContact from "../components/coordinator/coordinatorContact";

export default function Coordinators() {
  return (
    <>
      <Head>
        <title>Mathletes Meet - Douglas Memorial H.S. School</title>
      </Head>
      <Navbar />
      <CoordinatorContact />
      <Credits />
    </>
  );
}
