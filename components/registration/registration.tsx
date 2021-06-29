import React from "react";
import { useFormik, Field, FormikProvider } from "formik";
import { formSchema } from "./form.schema";
import axios from "axios";
import Link from "next/link";

export default function Registration() {
  const guidelines = [
    "Participants must attend the Inter school Mathematics fest, Mathletes 2021 in their school uniform.",
    "Participants must provide their Aadhar cards/ birth certificates  or  bonafide certificates issued from their schools.",
    "The host school will not be held responsible for any kind of technical glitch faced by the participating school  during the event.",
    "An alternative arrangement will be made by the host school if it faces any technical glitch.",
    "Cameras should be appropriately placed during all the online events.",
    "Resorting to the use of unfair means will lead to the disqualification of the participants.",
    "The presence of any other person in the frame during the event will not be encouraged.",
    "The presence of the participant through out  the event is mandatory.",
    "No verbal communication with anyone is allowed during the live events.",
    "The schedule and the timings of the events are subject to change.",
    "All decisions of the judges will be considered final and abiding.",
    "Participants  must make all arrangements of their stationeries.",
    "Participants have to display their materials  before the invigilators.",
    "Unique registration number will be provided to each participant.",
    "Participants will enter the Zoom meeting with their Unique Registration No. highlighted and not their names.",
    "Participants  are advised to join the Zoom meeting at least 5 to 6 minutes prior to their scheduled time.",
    "Participants should introduce themselves at the onset of the events using their Unique Registration number.",
    "A student  cannot  participate in more than 4 events.",
    "The first three schools to register for DDMx  will be considered eligible to participate in the event.",
    "A school can participate in any number or combination of events.",
    "For any kind of query during the online event, the participant may contact the Event  Coordinator.",
  ];
  const formik = useFormik({
    initialValues: {
      schoolName: "",
      schoolEmail: "",
      schoolPrincipal: "",
      studentRepresentativeName: "",
      studentRepresentativeEmail: "",
      studentRepresentativePhone: "",
      teacherRepresentativeName: "",
      teacherRepresentativeEmail: "",
      teacherRepresentativePhone: "",
      checked: [],
      art1: "",
      art2: "",
      shape1: "",
      shape2: "",
      languniv: "",
      illustrator1: "",
      illustrator2: "",
      memers1: "",
      memers2: "",
      enigma1: "",
      enigma2: "",
      dmmx1: "",
      dmmx2: "",
      dmmx3: "",
      jewel1: "",
      jewel2: "",
      making1: "",
      making2: "",
      sudoku1: "",
      sudoku2: "",
      sustain1: "",
      sustain2: "",
      mathathon1: "",
      mathathon2: "",
      mathathon3: "",
      mathathon4: "",
      cube1: "",
      cube2: "",
      quizzical1: "",
      quizzical2: "",
      ninjas1: "",
      ninjas2: "",
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      if (values.checked.length === 0)
        alert("Please select at least one event to proceed.");
      else {
        document.getElementById("submit-button").innerText = "Please Wait";
        (
          document.getElementById("submit-button") as HTMLButtonElement
        ).disabled = true;
        try {
          const res = await axios.post("/api/register", values, {});
          window.location.href = `/upload/${res.data.id}`;
        } catch (error) {
          console.log(error);
          alert(error.message);
          window.location.href = "/register";
        }
      }
    },
  });

  return (
    <>
      <div className="bg-white px-7 md:px-12 lg:px-96 mt-10" id="form">
        <p className="text-4xl mb-10 font-bold">
          DMHSS Mathletes Meet - Registration
        </p>
        <p className="text-sm md:text-xl mb-10">
          <span className="font-bold underline">General Guidelines</span>
          <ul style={{ listStyleType: "disc" }} className="pl-5 mt-3">
            <li>
              Last date to register is{" "}
              <span className="font-semibold">8th July 2021</span>.
            </li>
            {guidelines.map((guideline, index) => (
              <li key={index}>{guideline}</li>
            ))}
          </ul>
          <p className="mt-3 cursor-pointer">
            <Link href="/coordinators">
              <a>Please find the Event Coordinators by clicking here.</a>
            </Link>
          </p>
        </p>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <label
              htmlFor="schoolName"
              className="text-base md:text-xl font-bold"
            >
              School Name
            </label>
            <input
              id="schoolName"
              name="schoolName"
              type="text"
              placeholder="Please enter the school name in full."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.schoolName}
              className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
              required
            />
            {formik.touched.schoolName && formik.errors.schoolName ? (
              <div className="-mt-3 text-red-600">
                {formik.errors.schoolName}
              </div>
            ) : null}

            <label
              htmlFor="schoolEmail"
              className="text-base md:text-xl font-bold"
            >
              School Email
            </label>
            <input
              id="schoolEmail"
              name="schoolEmail"
              type="schoolEmail"
              placeholder="Please enter the email address of the school."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.schoolEmail}
              className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
            />
            {formik.touched.schoolEmail && formik.errors.schoolEmail ? (
              <div className="-mt-3 text-red-600">
                {formik.errors.schoolEmail}
              </div>
            ) : null}

            <label
              htmlFor="schoolPrincipal"
              className="text-base md:text-xl font-bold"
            >
              Full Name of the Principal
            </label>
            <input
              id="schoolPrincipal"
              name="schoolPrincipal"
              type="schoolPrincipal"
              placeholder="Please enter the full name of the school principal."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.schoolPrincipal}
              className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
            />
            {formik.touched.schoolPrincipal && formik.errors.schoolPrincipal ? (
              <div className="-mt-3 text-red-600">
                {formik.errors.schoolPrincipal}
              </div>
            ) : null}

            <label
              htmlFor="studentRepresentativeName"
              className="text-base md:text-xl font-bold"
            >
              Full Name - Student Representative
            </label>
            <input
              id="studentRepresentativeName"
              name="studentRepresentativeName"
              type="studentRepresentativeName"
              placeholder="Please enter the full name of the student representative."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.studentRepresentativeName}
              className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
            />
            {formik.touched.studentRepresentativeName &&
            formik.errors.studentRepresentativeName ? (
              <div className="-mt-3 text-red-600">
                {formik.errors.studentRepresentativeName}
              </div>
            ) : null}

            <label
              htmlFor="schoolRepresentativeEmail"
              className="text-base md:text-xl font-bold"
            >
              Email - Student Representative
            </label>
            <input
              id="studentRepresentativeEmail"
              name="studentRepresentativeEmail"
              type="studentRepresentativeEmail"
              placeholder="Please enter the email address of the student representative."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.studentRepresentativeEmail}
              className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
            />
            {formik.touched.studentRepresentativeEmail &&
            formik.errors.studentRepresentativeEmail ? (
              <div className="-mt-3 text-red-600">
                {formik.errors.studentRepresentativeEmail}
              </div>
            ) : null}

            <label
              htmlFor="studentRepresentativePhone"
              className="text-base md:text-xl font-bold"
            >
              Phone number - Student Representative
            </label>
            <input
              id="studentRepresentativePhone"
              name="studentRepresentativePhone"
              type="studentRepresentativePhone"
              placeholder="Please enter the 10 digit phone number of the student representative."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.studentRepresentativePhone}
              className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
            />
            {formik.touched.studentRepresentativePhone &&
            formik.errors.studentRepresentativePhone ? (
              <div className="-mt-3 text-red-600">
                {formik.errors.studentRepresentativePhone}
              </div>
            ) : null}

            <label
              htmlFor="teacherRepresentativeName"
              className="text-base md:text-xl font-bold"
            >
              Full Name - Teacher Representative
            </label>
            <input
              id="teacherRepresentativeName"
              name="teacherRepresentativeName"
              type="teacherRepresentativeName"
              placeholder="Please enter the full name of the teacher representative."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.teacherRepresentativeName}
              className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
            />
            {formik.touched.teacherRepresentativeName &&
            formik.errors.teacherRepresentativeName ? (
              <div className="-mt-3 text-red-600">
                {formik.errors.teacherRepresentativeName}
              </div>
            ) : null}

            <label
              htmlFor="schoolRepresentativeEmail"
              className="text-base md:text-xl font-bold"
            >
              Email - Teacher Representative
            </label>
            <input
              id="teacherRepresentativeEmail"
              name="teacherRepresentativeEmail"
              type="teacherRepresentativeEmail"
              placeholder="Please enter the email address of the teacher representative."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.teacherRepresentativeEmail}
              className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
            />
            {formik.touched.teacherRepresentativeEmail &&
            formik.errors.teacherRepresentativeEmail ? (
              <div className="-mt-3 text-red-600">
                {formik.errors.teacherRepresentativeEmail}
              </div>
            ) : null}

            <label
              htmlFor="schoolRepresentativeEmail"
              className="text-base md:text-xl font-bold"
            >
              Phone number - Teacher Representative
            </label>
            <input
              id="teacherRepresentativePhone"
              name="teacherRepresentativePhone"
              type="teacherRepresentativePhone"
              placeholder="Please enter the 10 digit phone number of the teacher representative."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.teacherRepresentativePhone}
              className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
            />
            {formik.touched.teacherRepresentativePhone &&
            formik.errors.teacherRepresentativePhone ? (
              <div className="-mt-3 text-red-600">
                {formik.errors.teacherRepresentativePhone}
              </div>
            ) : null}

            <label
              htmlFor="eventSelection"
              className="text-base md:text-xl font-bold"
            >
              Event Selection
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="art" />
              <span className="ml-3">Art Integration</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="shape" />
              <span className="ml-3">Shape Shakers</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="languniv" />
              <span className="ml-3">Language of the Universe</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="illustrator" />
              <span className="ml-3">Illustrator the Great </span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="memers" />
              <span className="ml-3">Math Memers</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="enigma" />
              <span className="ml-3">Enigma</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="dmmx" />
              <span className="ml-3">DMMx</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="jewel" />
              <span className="ml-3">Jewel of the Flatland</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="making" />
              <span className="ml-3">Making of Math</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="sudoku" />
              <span className="ml-3">Sudoku Solvers</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="sustain" />
              <span className="ml-3">Math to Sustain</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="mathathon" />
              <span className="ml-3">Mathathon</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="cube" />
              <span className="ml-3">Cube Maestro</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="quizzical" />
              <span className="ml-3">Let&apos;s get Quizzical</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="ninjas" />
              <span className="ml-3">Number Ninjas</span>
            </label>

            {formik.values.checked.find((value) => value === "art") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Art Integration
                </label>
                <input
                  id="art1"
                  name="art1"
                  type="text"
                  placeholder="Art Integration - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.art1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="art2"
                  name="art2"
                  type="text"
                  placeholder="Art Integration - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.art2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "shape") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Shape Shakers
                </label>
                <input
                  id="shape1"
                  name="shape1"
                  type="text"
                  placeholder="Shape Shakers - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.shape1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="shape2"
                  name="shape2"
                  type="text"
                  placeholder="Shake Shakers - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.shape2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "languniv") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Language of the Universe
                </label>
                <input
                  id="languniv"
                  name="languniv"
                  type="text"
                  placeholder="Language of the Universe - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.languniv}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "illustrator") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Illustrator the Great
                </label>
                <input
                  id="illustrator1"
                  name="illustrator1"
                  type="text"
                  placeholder="Illustrator the Great - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.illustrator1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="illustrator2"
                  name="illustrator2"
                  type="text"
                  placeholder="Illustrator the Great - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.illustrator2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "memers") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Math Memers
                </label>
                <input
                  id="memers1"
                  name="memers1"
                  type="text"
                  placeholder="Math Memers - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.memers1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="memers2"
                  name="memers2"
                  type="text"
                  placeholder="Math Memers - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.memers2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "enigma") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">Enigma</label>
                <input
                  id="enigma1"
                  name="enigma1"
                  type="text"
                  placeholder="Math Memers - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.enigma1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="enigma2"
                  name="enigma2"
                  type="text"
                  placeholder="Math Memers - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.enigma2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "dmmx") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">DMMx</label>
                <input
                  id="dmmx1"
                  name="dmmx1"
                  type="text"
                  placeholder="DMMx - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dmmx1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="dmmx2"
                  name="dmmx2"
                  type="text"
                  placeholder="DMMx - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dmmx2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="dmmx3"
                  name="dmmx3"
                  type="text"
                  placeholder="DMMx - Participant 3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dmmx3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "jewel") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Jewel of the Flatland
                </label>
                <input
                  id="jewel1"
                  name="jewel1"
                  type="text"
                  placeholder="Jewel of the Flatland - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.jewel1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="jewel2"
                  name="jewel2"
                  type="text"
                  placeholder="Jewel of the Flatland - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.jewel2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "making") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Making of Math
                </label>
                <input
                  id="making1"
                  name="making1"
                  type="text"
                  placeholder="Making of Math - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.making1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="making2"
                  name="making2"
                  type="text"
                  placeholder="Making of Math - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.making2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "sudoku") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Sudoku Solvers
                </label>
                <input
                  id="sudoku1"
                  name="sudoku1"
                  type="text"
                  placeholder="Sudoku Solvers - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sudoku1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="sudoku2"
                  name="sudoku2"
                  type="text"
                  placeholder="Sudoku Solvers - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sudoku2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "sustain") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Math to Sustain
                </label>
                <input
                  id="sustain1"
                  name="sustain1"
                  type="text"
                  placeholder="Math to Sustain - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sustain1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="sustain2"
                  name="sustain2"
                  type="text"
                  placeholder="Math to Sustain - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sustain2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "mathathon") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Mathathon
                </label>
                <input
                  id="mathathon1"
                  name="mathathon1"
                  type="text"
                  placeholder="Mathathon - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="mathathon2"
                  name="mathathon2"
                  type="text"
                  placeholder="Mathathon - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="mathathon3"
                  name="mathathon3"
                  type="text"
                  placeholder="Mathathon - Participant 3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="mathathon4"
                  name="mathathon4"
                  type="text"
                  placeholder="Mathathon - Participant 4"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon4}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "cube") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Cube Maestro
                </label>
                <input
                  id="cube1"
                  name="cube1"
                  type="text"
                  placeholder="Cube Maestro - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cube1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="cube2"
                  name="cube2"
                  type="text"
                  placeholder="Cube Maestro - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cube2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "quizzical") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Let&apos;s get Quizzical
                </label>
                <input
                  id="cube1"
                  name="cube1"
                  type="text"
                  placeholder="Let's get Quizzical - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cube1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="cube2"
                  name="cube2"
                  type="text"
                  placeholder="Let's get Quizzical - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cube2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "ninjas") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Number Ninjas
                </label>
                <input
                  id="ninjas1"
                  name="cubninjas1e1"
                  type="text"
                  placeholder="Number Ninjas - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ninjas1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="cube2"
                  name="cube2"
                  type="text"
                  placeholder="Number Ninjas - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cube2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}
            <button
              id="submit-button"
              type="submit"
              className="text-sm md:text-xl bg-yellow-500 p-4 rounded-xl mx-auto block mt-3"
            >
              Submit
            </button>
          </form>
        </FormikProvider>
      </div>
    </>
  );
}
