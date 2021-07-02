import Link from "next/link";
import React from "react";

export default function LandingSchedule() {
  return (
    <div className="bg-white px-7 md:px-12 lg:px-36 my-10" id="events">
      <h1 className="text-4xl mb-2">Schedule</h1>
      <svg
        width="255"
        height="10"
        viewBox="0 0 255 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="255" height="10" rx="5" fill="#2d111d" />
      </svg>
      <div className="flex items-center justify-between mt-5">
        <p className="text-xl md:text-2xl">
          You can check out the schedule for all the 3 days.
        </p>
        <Link href="/schedule">
          <a className="bg-yellow-500 p-5 rounded-md text-xl text-center">
            View Schedule
          </a>
        </Link>
      </div>
    </div>
  );
}
