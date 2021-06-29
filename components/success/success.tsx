import Image from "next/image";
import React from "react";

export default function SuccessComponent({ id }) {
  return (
    <div
      className="bg-white px-7 md:px-12 lg:px-96 mt-10 min-h-screen"
      id="success"
    >
      <div className="mx-auto mb-10 flex justify-center">
        <Image src="/mathletes.jpg" height={200} width={200} />
      </div>
      <p className="text-center text-4xl">Congratulations!</p>
      <p className="text-center text-2xl mt-5">
        You have successfully registered for DMHSS Mathletes Meet.
      </p>
      <p className="text-center text-sm md:text-xl mt-5">
        Your Reference Number is <span className="font-bold">{id}</span>.<br />
        Please quote this reference number in your communication if you wish to
        get any support reagrding your registration.
        <br />
        All the required information will be sent to the representatives in due
        time. Please follow all the guidelines. If you have any query, we are
        available at info@dmhss.org for all your needs.
      </p>
    </div>
  );
}
