import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import EventDescription from "../components/events/eventDescription";

export default function Event() {
  const req = useRouter();
  const { eventId } = req.query;
  return (
    <>
      <Head>
        <title>Mathletes - Douglas Memorial H.S. School</title>
      </Head>
      <EventDescription id={eventId} />
    </>
  );
}
