import React from "react";

import Navbar from "../components/navbar/navbar";
import Landing from "../components/landing/landing";
import Credits from "../components/footer/credits";

function index() {
  return (
    <>
      <Navbar />
      <Landing />
      <Credits />
    </>
  );
}

export default index;
