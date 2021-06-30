import React from "react";
import Head from "next/head";
import { InferGetServerSidePropsType } from "next";
import axios from "axios";

import Navbar from "../components/navbar/navbar";
import Landing from "../components/landing/landing";
import Events from "../components/events/events";
import Credits from "../components/footer/credits";
import Faq from "../components/faq/faq";
import School from "../components/footer/school";
import Foreward from "../components/foreword/foreward";
import LandingSchedule from "../components/schedule/landingSchedule";

export const getServerSideProps = async () => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/api/events`);
    const eventArray: { name: string; slug: string }[] = res.data.list;

    return {
      props: {
        eventArray,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
};

export default function index({
  eventArray,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Mathletes Meet - Douglas Memorial H.S. School</title>
      </Head>
      <Navbar />
      <Landing />
      <Foreward />
      <LandingSchedule />
      <Events event={eventArray} />
      <Faq />
      <School />
      <Credits />
    </>
  );
}
