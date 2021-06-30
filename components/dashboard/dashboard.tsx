import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import ViewEntry from "./viewEntry";

export default function DashboardComponent() {
  const [entries, setEntries] = useState(null);
  const [number, setNumber] = useState(0);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/api/admin/fetch", {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });
        setEntries(response.data);
      } catch (error) {
        console.error(error);
        window.location.href = "/admin";
      }
    }
    if (entries === null) getData();
  }, [entries]);

  const toggleEntry = (value: number) => {
    let finalValue = number + value;
    if (finalValue >= 0 && finalValue < entries.length) {
      setNumber(finalValue);
    }
  };

  return entries === null ? (
    <div className="bg-white px-7 md:px-12 lg:px-96 mt-10" id="loading">
      <p className="text-center">Loading...</p>
    </div>
  ) : (
    <>
      <div className="bg-white px-7 md:px-12 lg:px-96 mt-5" id="content">
        <h1 className="text-3xl">Mathletes - Registration Dashboard</h1>
        <p className="mt-3">
          This dashboard is view only. In case of any changes to any entries,
          please contact the Super Admin at{" "}
          <a href="mailto:me@aniruddha.net">me@aniruddha.net</a>.
        </p>
        <br />
        <br />
        <div className="w-full flex justify-between items-center text-lg md:text-xl">
          <p
            className="cursor-pointer"
            onClick={(event) => {
              event.preventDefault();
              toggleEntry(-1);
            }}
          >
            <MdSkipPrevious className="inline-block" /> Previous
          </p>
          <p>
            Viewing Entry {number + 1} of {entries?.length}
          </p>
          <p
            className="cursor-pointer"
            onClick={(event) => {
              event.preventDefault();
              toggleEntry(1);
            }}
          >
            Next <MdSkipNext className="inline-block" />
          </p>
        </div>
        <br />
        <ViewEntry entry={entries[number]} />
      </div>
    </>
  );
}
