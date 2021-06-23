import React from "react";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import axios from "axios";

import Navbar from "../components/navbar/navbar";
import Landing from "../components/landing/landing";
import Events from "../components/events/events";
import Credits from "../components/footer/credits";
import Faq from "../components/faq/faq";
import School from "../components/footer/school";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/api/events`);
    const eventNames: string[] = res.data.list;

    return {
      props: {
        eventNames,
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
  eventNames,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Mathletes - Douglas Memorial H.S. School</title>
        <meta name="title" content="Mathletes - Douglas Memorial H.S. School" />
        <meta
          name="description"
          content="Douglas Memorial H.S. School presents to you Mathletes, a fun filled two day inter-school event revolving around the beautiful world of maths!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mathletes.dmhss.org/" />
        <meta
          property="og:title"
          content="Mathletes - Douglas Memorial H.S. School"
        />
        <meta
          property="og:description"
          content="Douglas Memorial H.S. School presents to you Mathletes, a fun filled two day inter-school event revolving around the beautiful world of maths!"
        />
        <meta
          property="og:image"
          content="https://billboard.srmkzilla.net/api/blog?title=Mathletes&subtitle=Douglas%20Memorial%20H.S.%20School&theme=dark&fontSize=180px"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mathletes.dmhss.org/" />
        <meta
          property="twitter:title"
          content="Mathletes - Douglas Memorial H.S. School"
        />
        <meta
          property="twitter:description"
          content="Douglas Memorial H.S. School presents to you Mathletes, a fun filled two day inter-school event revolving around the beautiful world of maths!"
        />
        <meta
          property="twitter:image"
          content="https://billboard.srmkzilla.net/api/blog?title=Mathletes&subtitle=Douglas%20Memorial%20H.S.%20School&theme=dark&fontSize=180px"
        />
      </Head>
      <Navbar />
      <Landing />
      <Events eventName={eventNames} />
      <Faq />
      <School />
      <Credits />
    </>
  );
}
