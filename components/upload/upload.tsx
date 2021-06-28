import React from "react";

export default function UploadFile({ fileObject, id }) {
  return (
    <>
      <div className="bg-white px-7 md:px-12 lg:px-96 mt-10 text-left">
        <p className="text-4xl mb-10 font-bold">Document Upload Portal</p>
        <p className="text-sm md:text-xl mb-10">
          Please upload the Aadhar Card, Latest Marksheet or a Bonafide from the
          School for each of the students. You registration is{" "}
          <span className="font-bold">NOT complete</span> unless you upload all
          the documents.
          <br />
          If you want to upload these documents later, you can visit the url{" "}
          <span className="font-bold">
            https://dmhss-mathletes.vercel.app/upload/{id}
          </span>{" "}
          at a later stage to complete your registration (you do NOT need to
          register again).
        </p>
        <form action="/api/upload" method="POST" encType="multipart/form-data">
          {Object.keys(fileObject).map((object) => {
            return (
              <div key={object}>
                <h1 className="mb-2 text-sm md:text-xl">{object}</h1>
                <input className="mb-5" type="file" id={object} name={object} />
              </div>
            );
          })}
          <input type="hidden" name="id" value={id} />
          <button
            id="submit-button"
            type="submit"
            className="text-sm md:text-xl bg-yellow-500 p-4 rounded-xl mx-auto block mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
