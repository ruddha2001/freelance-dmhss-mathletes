import Head from "next/head";
import React from "react";
import Credits from "../../components/footer/credits";
import Navbar from "../../components/navbar/navbar";
import SuccessComponent from "../../components/success/success";

export const getServerSideProps = async ({ query: { id } }) => {
  try {
    return {
      props: {
        id,
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

export default function Success({ id }) {
  return (
    <>
      <Head>
        <title>Mathletes Meet - Douglas Memorial H.S. School</title>
      </Head>
      <Navbar />
      <SuccessComponent id={id} />
      <Credits />
    </>
  );
}
