import Head from "next/head";
import React from "react";
import Credits from "../components/footer/credits";
import Navbar from "../components/navbar/navbar";
import Registration from "../components/registration/registration";

export default function Register() {
  return (
    <>
      <Head>
        <title>Mathletes Meet - Douglas Memorial H.S. School</title>
      </Head>
      <Navbar />
      <Registration />
      <Credits />
    </>
  );
}
