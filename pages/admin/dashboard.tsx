import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import DashboardComponent from "../../components/dashboard/dashboard";
import Credits from "../../components/footer/credits";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Mathletes Meet - Douglas Memorial H.S. School</title>
      </Head>
      <DashboardComponent />
      <Credits />
    </>
  );
}
