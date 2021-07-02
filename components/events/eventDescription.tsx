import React from "react";
import { BiArrowBack } from "react-icons/bi";

export default function EventDescription({ data }) {
  return (
    <div className="bg-white px-7 md:px-12 lg:px-30 mt-10 overflow-auto text-2xl">
      <p
        className="text-xl text-gray-500 cursor-pointer"
        onClick={() => {
          window.location.href = "/#events";
        }}
      >
        <BiArrowBack className="inline-block" /> Back to Events List
      </p>
      <h1 className="mt-3 text-4xl py-1 font-bold">{data.name}</h1>
      {data.day ? (
        <p className="mt-5">
          <span className="font-bold">Day of the Event:</span> {data.day} (
          {data.day === "Day 1"
            ? "31 July 2021"
            : data.day === "Day 2"
            ? "1 August 2021"
            : "2 August 2021"}
          )
        </p>
      ) : null}
      <p className="mt-5 leading-normal lg:leading-normal lg:text-3xl">
        {data.summary}
      </p>
      <ul className="list-disc pl-10 lg:text-3xl leading-normal lg:leading-normal mt-5">
        {data.rules.map((rule, index) => {
          return <li key={index}>{rule}</li>;
        })}
        {data.evaluation ? (
          <>
            <li>Evaluation Criteria</li>
            {Object.keys(data.evaluation).map((criteria) => {
              return (
                <p className="pl-4" key={criteria}>
                  {criteria}: {data.evaluation[criteria]}
                </p>
              );
            })}
          </>
        ) : null}
      </ul>
      {data.link ? (
        <p
          className="mt-3 lg:text-3xl underline cursor-pointer"
          title={`Download ${data.link.name}`}
          onClick={() => {
            window.open(`${data.link.url}`);
          }}
        >
          {data.link.name}
        </p>
      ) : null}
      <p
        className="text-center bg-yellow-500 mx-auto p-4 md:p-5 mt-10 rounded-lg cursor-pointer shadow-lg hover:shadow-xl"
        title="Register now for the event!"
        style={{ width: "max-content" }}
        onClick={() => {
          window.location.href = "/register";
        }}
      >
        Register Now
      </p>
      <p
        className="text-center text-base mt-3 mb-10 cursor-pointer text-gray-500"
        title="Back to Events List"
        onClick={() => {
          window.location.href = "/#events";
        }}
      >
        Go Back to Events List
      </p>
    </div>
  );
}
