import React, { useState } from "react";

export default function UploadFile({ fileObject, id }) {
  const [error, setError] = useState(
    "An unknown error has occured. Please re-try, or contact us if the error persists."
  );
  const handleSubmission = () => {
    document.getElementById("error").style.display = "none";
    try {
      const inputElement = document.getElementsByTagName("input");
      let promiseArray = [];
      for (let i = 0; i < inputElement.length; i++) {
        if (inputElement[i].files) {
          const file = inputElement[i].files[0];
          if (!(file instanceof Blob))
            throw {
              isCustom: true,
              message: `${inputElement[i].id} requires a file to be uploaded.`,
            };
          if (file.size > 15728640) {
            throw {
              isCustom: true,
              message: `${inputElement[i].id} has crossed the limit of 15 MB. Please upload a smaller file.`,
            };
          }
        }
      }
    } catch (error) {
      if (error.isCustom) {
        setError(error.message);
        document.getElementById("error").style.display = "block";
      }
    }
  };
  return (
    <>
      <div className="bg-white px-7 md:px-12 lg:px-96 mt-10 text-left">
        <p className="text-4xl mb-10 font-bold">Document Upload Portal</p>
        <p className="text-sm md:text-xl mb-10">
          Please upload the Aadhar Card, Birth Certificate or a Bonafide from
          the School for each of the students. You registration is{" "}
          <span className="font-bold">NOT complete</span> unless you upload all
          the documents. Each individual document should not exceed 15 MB in
          size.
          <br />
          If you want to upload these documents later, you can visit the url{" "}
          <span className="font-bold">
            https://mathletes.dmhss.org/upload/{id}
          </span>{" "}
          at a later stage to complete your registration (you do NOT need to
          register again).
        </p>
        <form>
          {Object.keys(fileObject).map((object) => {
            return (
              <div key={object}>
                <h1 className="mb-2 text-sm md:text-xl">{object}</h1>
                <input
                  className="mb-5"
                  type="file"
                  id={object}
                  name={object}
                  required
                />
              </div>
            );
          })}
          <input type="hidden" name="id" value={id} />
          <button
            id="submit-button"
            type="submit"
            className="text-sm md:text-xl bg-yellow-500 p-4 rounded-xl mx-auto block mt-3"
            onClick={(event) => {
              event.preventDefault();
              handleSubmission();
            }}
          >
            Submit
          </button>
          <p
            className="text-center text-red-600"
            id="error"
            style={{ display: "none" }}
          >
            Error: {error}
          </p>
        </form>
      </div>
    </>
  );
}
