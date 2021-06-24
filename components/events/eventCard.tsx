import React from "react";

export default function EventCard({ name, link }) {
  return (
    <div
      className="bg-lightMaroon text-4xl leading-relaxed py-16 px-14 lg:px-10 items-center italic shadow-lg hover:shadow-2xl rounded-lg cursor-pointer"
      title={name}
      onClick={() => {
        window.location.href = `/${link}`;
      }}
    >
      {name}
    </div>
  );
}
