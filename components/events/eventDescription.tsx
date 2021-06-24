import React from "react";
import { BiArrowBack } from "react-icons/bi";

export default function EventDescription({ data }) {
  return (
    <div className="bg-white px-7 md:px-12 lg:px-30 mt-10 overflow-auto text-2xl">
      <p
        className="text-xl text-gray-400 cursor-pointer"
        onClick={() => {
          window.location.href = "/#events";
        }}
      >
        <BiArrowBack className="inline-block" /> Back to Events List
      </p>
      <h1 className="mt-3 text-4xl py-1">{data.name}</h1>
      <p className="mt-5 leading-normal lg:leading-normal lg:text-3xl">
        {data.summary}
      </p>
      <ul className="list-disc pl-10 lg:text-3xl leading-normal lg:leading-normal mt-5">
        {data.rules.map((rule) => {
          return <li>{rule}</li>;
        })}
      </ul>
    </div>
  );
}
