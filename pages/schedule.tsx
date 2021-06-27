import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Credits from "../components/footer/credits";
import Schedule from "../components/schedule/schedule";

export default function SchedulePage() {
  return (
    <>
      <Head>
        <title>Mathletes Meet - Douglas Memorial H.S. School</title>
      </Head>
      <Navbar />
      <Schedule />
      <Credits />
    </>
  );
}
