import axios from "axios";
import Head from "next/head";
import React from "react";
import Credits from "../../components/footer/credits";
import Navbar from "../../components/navbar/navbar";
import UploadFile from "../../components/upload/upload";

export const getServerSideProps = async ({ query: { id } }) => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/api/upload/${id}`);
    const data = res.data.fileObject;

    return {
      props: {
        data,
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

export default function Upload({ data, id }) {
  return (
    <>
      <Head>
        <title>Mathletes Meet - Douglas Memorial H.S. School</title>
      </Head>
      <Navbar />
      <UploadFile fileObject={data} id={id} />
      <Credits />
    </>
  );
}
