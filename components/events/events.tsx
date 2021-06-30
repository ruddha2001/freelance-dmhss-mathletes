import React from "react";
import EventCard from "./eventCard";

export default function Events({ event }) {
  return (
    <div className="bg-white px-7 md:px-12 lg:px-36 mt-10" id="events">
      <h1 className="text-4xl mb-2">Events</h1>
      <svg
        width="255"
        height="10"
        viewBox="0 0 255 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="255" height="10" rx="5" fill="#2d111d" />
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 justify-between text-center mt-10 text-white">
        {event.map((element) => {
          return (
            <EventCard
              name={element.name}
              link={element.slug}
              key={element.name}
            />
          );
        })}
      </div>
    </div>
  );
}
