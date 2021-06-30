import React from "react";

export default function ViewEntry({ entry }) {
  return (
    <div className="text-xl">
      <table>
        <tr>
          <td className="pr-10 font-bold">Registration ID</td>
          <td>{entry.id}</td>
        </tr>
        <tr>
          <td className="pr-10 font-bold">Name of the School</td>
          <td>{entry.schoolName}</td>
        </tr>
        <tr>
          <td className="pr-10 font-bold">Name of the Principal</td>
          <td>{entry.schoolPrincipal}</td>
        </tr>
        <tr>
          <td className="pr-10 font-bold">School Email</td>
          <td>{entry.schoolEmail}</td>
        </tr>
        <tr>
          <td className="pr-10 font-bold">Student Rep Name</td>
          <td>{entry.studentRepresentativeName}</td>
        </tr>
        <tr>
          <td className="pr-10 font-bold">Student Rep Email</td>
          <td>{entry.studentRepresentativeEmail}</td>
        </tr>
        <tr>
          <td className="pr-10 font-bold">Student Rep Phone</td>
          <td>{entry.studentRepresentativePhone}</td>
        </tr>
        <tr>
          <td className="pr-10 font-bold">Teacher Rep Name</td>
          <td>{entry.teacherRepresentativeName}</td>
        </tr>
        <tr>
          <td className="pr-10 font-bold">Teacher Rep Email</td>
          <td>{entry.teacherRepresentativeEmail}</td>
        </tr>
        <tr>
          <td className="pr-10 font-bold">Teacher Rep Phone</td>
          <td>{entry.teacherRepresentativePhone}</td>
        </tr>
      </table>
      <br />
      <br />
      <table className="border-2 mx-auto">
        <tr>
          <td className="pr-10 font-bold border-2 p-2">Events Selected</td>
          <td className="border-2 p-2">{entry.checked.join(", ")}</td>
        </tr>
        {Object.keys(entry).map((key) => {
          if (
            key !== "schoolName" &&
            key !== "schoolEmail" &&
            key !== "schoolPrincipal" &&
            key !== "studentRepresentativeName" &&
            key !== "studentRepresentativeEmail" &&
            key !== "studentRepresentativePhone" &&
            key !== "teacherRepresentativeName" &&
            key !== "teacherRepresentativeEmail" &&
            key !== "teacherRepresentativePhone" &&
            key !== "checked" &&
            key !== "fileObject" &&
            key !== "id"
          ) {
            return (
              <tr>
                <td className="pr-10 font-bold border-2 p-2">{key}</td>
                <td className="border-2 p-2">{entry[key]}</td>
              </tr>
            );
          } else return null;
        })}
      </table>
      <br />
      <br />
      <table className="border-2 mx-auto">
        {Object.keys(entry.fileObject).map((key) => {
          return entry.fileObject[key].photo !== "" ? (
            <tr>
              <td className="pr-10 font-bold border-2 p-2">{key}</td>
              <td className="border-2 p-2">
                <a
                  href={entry.fileObject[key].photo}
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  Photo
                </a>
              </td>
              <td className="border-2 p-2">
                <a
                  href={entry.fileObject[key].proof}
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  Document
                </a>
              </td>
            </tr>
          ) : null;
        })}
      </table>
    </div>
  );
}
