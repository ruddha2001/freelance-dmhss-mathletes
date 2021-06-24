import React from "react";
import Head from "next/head";
import EventDescription from "../components/events/eventDescription";
import Navbar from "../components/navbar/navbar";
import axios from "axios";
import { InferGetServerSidePropsType } from "next";
import Credits from "../components/footer/credits";

export const getServerSideProps = async ({ query: { eventId } }) => {
  try {
    const res = await axios.get(
      `${process.env.BASE_URL}/api/events/${eventId}`
    );
    const eventData = res.data;

    return {
      props: {
        eventData,
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

export default function Event({
  eventData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Mathletes - Douglas Memorial H.S. School</title>
      </Head>
      <Navbar />
      <EventDescription data={eventData} />
      <Credits />
    </>
  );
}
