import React from "react";
import { useFormik, Field, FormikProvider } from "formik";
import { formSchema } from "./form.schema";
import axios from "axios";
import Link from "next/link";

export default function Registration() {
  const guidelines = [
    "Participants must attend the Inter school Mathematics fest, Mathletes 2021 in their school uniform.",
    "Participants must provide their Aadhar cards/ birth certificates  or  bonafide certificates issued from their schools.",
    "If a particular school has students with identical names and surnames, in that case one of them will have to add his/her date of birth in numeric with their full names ( e.g: Aniruddha Chatterjee 24.11.1990)",
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
    "When joining the Zoom meeting, participants must mention/highlight their Names + unique registration ID. ( School name should not be mentioned)",
    "Participants  are advised to join the Zoom meeting at least 5 to 6 minutes prior to their scheduled time.",
    "Participants should introduce themselves at the onset of the events using their Unique Registration number.",
    "A student  cannot  participate in more than 4 events.",
    "The first three schools to register for DDMx  will be considered eligible to participate in the event.",
    "A school can participate in any number or combination of events.",
    "Category 1 : Class 6-8",
    "Category 2 : Class 9-10",
    "Category 3 : Class 11-12",
    "For any kind of query regarding the online event, the participant(s) may contact the Event  Coordinator.",
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
      shape1cat2: "",
      shape2cat2: "",
      shape1cat3: "",
      shape2cat3: "",
      languniv1cat2: "",
      languniv2cat2: "",
      languniv1cat3: "",
      languniv2cat3: "",
      illustrator1cat2: "",
      illustrator2cat2: "",
      illustrator1cat3: "",
      illustrator2cat3: "",
      memers1cat2: "",
      memers2cat2: "",
      memers1cat3: "",
      memers2cat3: "",
      enigma1cat2: "",
      enigma2cat2: "",
      enigma1cat3: "",
      enigma2cat3: "",
      dmmx1cat2: "",
      dmmx2cat2: "",
      dmmx3cat2: "",
      dmmx1cat3: "",
      dmmx2cat3: "",
      dmmx3cat3: "",
      jewel1cat2: "",
      jewel2cat2: "",
      jewel1cat3: "",
      jewel2cat3: "",
      making1cat1: "",
      making2cat1: "",
      making1cat2: "",
      making2cat2: "",
      making1cat3: "",
      making2cat3: "",
      sudoku1cat1: "",
      sudoku2cat1: "",
      sudoku1cat2: "",
      sudoku2cat2: "",
      sudoku1cat3: "",
      sudoku2cat3: "",
      sustain1: "",
      sustain2: "",
      mathathon1cat1: "",
      mathathon2cat1: "",
      mathathon3cat1: "",
      mathathon4cat1: "",
      mathathon1cat2: "",
      mathathon2cat2: "",
      mathathon3cat2: "",
      mathathon4cat2: "",
      mathathon1cat3: "",
      mathathon2cat3: "",
      mathathon3cat3: "",
      mathathon4cat3: "",
      cube1cat1: "",
      cube2cat1: "",
      cube1cat2: "",
      cube2cat2: "",
      cube1cat3: "",
      cube2cat3: "",
      quizzical1cat1: "",
      quizzical2cat1: "",
      quizzical1cat2: "",
      quizzical2cat2: "",
      quizzical1cat3: "",
      quizzical2cat3: "",
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
              <a>
                Please find the Event Coordinators' name list and contact, here.
              </a>
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
              <Field type="checkbox" name="checked" value="shapecat2" />
              <span className="ml-3">Shape Shakers (Category 2)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="shapecat3" />
              <span className="ml-3">Shape Shakers (Category 3)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="langunivcat2" />
              <span className="ml-3">
                Language of the Universe (Category 2)
              </span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="langunivcat3" />
              <span className="ml-3">
                Language of the Universe (Category 3)
              </span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="illustratorcat2" />
              <span className="ml-3">Illustrator the Great (Category 2)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="illustratorcat3" />
              <span className="ml-3">Illustrator the Great (Category 3)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="memerscat2" />
              <span className="ml-3">Math Memers (Category 2)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="memerscat3" />
              <span className="ml-3">Math Memers (Category 3)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="enigmacat2" />
              <span className="ml-3">Enigma (Category 2)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="enigmacat3" />
              <span className="ml-3">Enigma (Category 3)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="dmmxcat2" />
              <span className="ml-3">DMMx (Category 2)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="dmmxcat3" />
              <span className="ml-3">DMMx (Category 3)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="jewelcat2" />
              <span className="ml-3">Jewel of the Flatland (Category 2)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="jewelcat3" />
              <span className="ml-3">Jewel of the Flatland (Category 3)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="makingcat1" />
              <span className="ml-3">Making of Math (Category 1)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="makingcat2" />
              <span className="ml-3">Making of Math (Category 2)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="makingcat3" />
              <span className="ml-3">Making of Math (Category 3)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="sudokucat1" />
              <span className="ml-3">Sudoku Solvers (Category 1)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="sudokucat2" />
              <span className="ml-3">Sudoku Solvers (Category 2)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="sudokucat3" />
              <span className="ml-3">Sudoku Solvers (Category 3)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="sustain" />
              <span className="ml-3">Math to Sustain</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="mathathoncat1" />
              <span className="ml-3">Mathathon (Category 1)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="mathathoncat2" />
              <span className="ml-3">Mathathon (Category 2)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="mathathoncat3" />
              <span className="ml-3">Mathathon (Category 3)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="cubecat1" />
              <span className="ml-3">Cube Maestro (Category 1)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="cubecat2" />
              <span className="ml-3">Cube Maestro (Category 2)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="cubecat3" />
              <span className="ml-3">Cube Maestro (Category 3)</span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="quizzicalcat1" />
              <span className="ml-3">
                Let&apos;s get Quizzical (Category 1)
              </span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="quizzicalcat2" />
              <span className="ml-3">
                Let&apos;s get Quizzical (Category 2)
              </span>
            </label>
            <label className="block text-sm md:text-xl">
              <Field type="checkbox" name="checked" value="quizzicalcat3" />
              <span className="ml-3">
                Let&apos;s get Quizzical (Category 3)
              </span>
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

            {formik.values.checked.find((value) => value === "shapecat2") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Shape Shakers (Category 2)
                </label>
                <input
                  id="shape1cat2"
                  name="shape1cat2"
                  type="text"
                  placeholder="Shape Shakers - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.shape1cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="shape2cat2"
                  name="shape2cat2"
                  type="text"
                  placeholder="Shake Shakers - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.shape2cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "shapecat3") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Shape Shakers (Category 3)
                </label>
                <input
                  id="shape1cat3"
                  name="shape1cat3"
                  type="text"
                  placeholder="Shape Shakers - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.shape1cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="shape2cat3"
                  name="shape2cat3"
                  type="text"
                  placeholder="Shake Shakers - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.shape2cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "langunivcat2") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Language of the Universe (Category 2)
                </label>
                <input
                  id="languniv1cat2"
                  name="languniv1cat2"
                  type="text"
                  placeholder="Language of the Universe - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.languniv1cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="languniv2cat2"
                  name="languniv2cat2"
                  type="text"
                  placeholder="Language of the Universe - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.languniv2cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "langunivcat3") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Language of the Universe (Category 3)
                </label>
                <input
                  id="languniv1cat3"
                  name="languniv1cat3"
                  type="text"
                  placeholder="Language of the Universe - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.languniv1cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="languniv2cat3"
                  name="languniv2cat3"
                  type="text"
                  placeholder="Language of the Universe - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.languniv2cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find(
              (value) => value === "illustratorcat2"
            ) ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Illustrator the Great (Category 2)
                </label>
                <input
                  id="illustrator1cat2"
                  name="illustrator1cat2"
                  type="text"
                  placeholder="Illustrator the Great - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.illustrator1cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="illustrator2cat2"
                  name="illustrator2cat2"
                  type="text"
                  placeholder="Illustrator the Great - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.illustrator2cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}

            {formik.values.checked.find(
              (value) => value === "illustratorcat3"
            ) ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Illustrator the Great (Category 3)
                </label>
                <input
                  id="illustrator1cat3"
                  name="illustrator1cat3"
                  type="text"
                  placeholder="Illustrator the Great - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.illustrator1cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="illustrator2cat3"
                  name="illustrator2cat3"
                  type="text"
                  placeholder="Illustrator the Great - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.illustrator2cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "memerscat2") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Math Memers (Category 2)
                </label>
                <input
                  id="memers1cat2"
                  name="memers1cat2"
                  type="text"
                  placeholder="Math Memers - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.memers1cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="memers2cat2"
                  name="memers2cat2"
                  type="text"
                  placeholder="Math Memers - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.memers2cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "memerscat3") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Math Memers (Category 3)
                </label>
                <input
                  id="memers1cat3"
                  name="memers1cat3"
                  type="text"
                  placeholder="Math Memers - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.memers1cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="memers2cat3"
                  name="memers2cat3"
                  type="text"
                  placeholder="Math Memers - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.memers2cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "enigmacat2") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Enigma (Category 2)
                </label>
                <input
                  id="enigma1cat2"
                  name="enigma1cat2"
                  type="text"
                  placeholder="Math Memers - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.enigma1cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="enigma2cat2"
                  name="enigma2cat2"
                  type="text"
                  placeholder="Math Memers - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.enigma2cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "enigmacat3") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Enigma (Category 3)
                </label>
                <input
                  id="enigma1cat3"
                  name="enigma1cat3"
                  type="text"
                  placeholder="Math Memers - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.enigma1cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="enigma2cat3"
                  name="enigma2cat3"
                  type="text"
                  placeholder="Math Memers - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.enigma2cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "dmmxcat2") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  DMMx (Category 2)
                </label>
                <input
                  id="dmmx1cat2"
                  name="dmmx1cat2"
                  type="text"
                  placeholder="DMMx - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dmmx1cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="dmmx2cat2"
                  name="dmmx2cat2"
                  type="text"
                  placeholder="DMMx - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dmmx2cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="dmmx3cat2"
                  name="dmmx3cat2"
                  type="text"
                  placeholder="DMMx - Participant 3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dmmx3cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "dmmxcat3") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  DMMx (Category 3)
                </label>
                <input
                  id="dmmx1cat3"
                  name="dmmx1cat3"
                  type="text"
                  placeholder="DMMx - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dmmx1cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="dmmx2cat3"
                  name="dmmx2cat3"
                  type="text"
                  placeholder="DMMx - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dmmx2cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="dmmx3cat3"
                  name="dmmx3cat3"
                  type="text"
                  placeholder="DMMx - Participant 3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dmmx3cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "jewelcat2") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Jewel of the Flatland (Category 2)
                </label>
                <input
                  id="jewel1cat2"
                  name="jewel1cat2"
                  type="text"
                  placeholder="Jewel of the Flatland - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.jewel1cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="jewel2cat2"
                  name="jewel2cat2"
                  type="text"
                  placeholder="Jewel of the Flatland - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.jewel2cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "jewelcat3") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Jewel of the Flatland (Category 3)
                </label>
                <input
                  id="jewel1cat3"
                  name="jewel1cat3"
                  type="text"
                  placeholder="Jewel of the Flatland - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.jewel1cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="jewel2cat3"
                  name="jewel2cat3"
                  type="text"
                  placeholder="Jewel of the Flatland - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.jewel2cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "makingcat1") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Making of Math (Category 1)
                </label>
                <input
                  id="making1cat1"
                  name="making1cat1"
                  type="text"
                  placeholder="Making of Math - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.making1cat1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="making2cat1"
                  name="making2cat1"
                  type="text"
                  placeholder="Making of Math - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.making2cat1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "makingcat2") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Making of Math (Category 2)
                </label>
                <input
                  id="making1cat2"
                  name="making1cat2"
                  type="text"
                  placeholder="Making of Math - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.making1cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="making2cat2"
                  name="making2cat2"
                  type="text"
                  placeholder="Making of Math - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.making2cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "makingcat3") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Making of Math (Category 3)
                </label>
                <input
                  id="making1cat3"
                  name="making1cat3"
                  type="text"
                  placeholder="Making of Math - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.making1cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="making2cat3"
                  name="making2cat3"
                  type="text"
                  placeholder="Making of Math - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.making2cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "sudokucat1") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Sudoku Solvers (Category 1)
                </label>
                <input
                  id="sudoku1cat1"
                  name="sudoku1cat1"
                  type="text"
                  placeholder="Sudoku Solvers - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sudoku1cat1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="sudoku2cat1"
                  name="sudoku2cat1"
                  type="text"
                  placeholder="Sudoku Solvers - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sudoku2cat1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "sudokucat2") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Sudoku Solvers (Category 2)
                </label>
                <input
                  id="sudoku1cat2"
                  name="sudoku1cat2"
                  type="text"
                  placeholder="Sudoku Solvers - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sudoku1cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="sudoku2cat2"
                  name="sudoku2cat2"
                  type="text"
                  placeholder="Sudoku Solvers - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sudoku2cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "sudokucat3") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Sudoku Solvers (Category 3)
                </label>
                <input
                  id="sudoku1cat3"
                  name="sudoku1cat3"
                  type="text"
                  placeholder="Sudoku Solvers - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sudoku1cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="sudoku2cat3"
                  name="sudoku2cat3"
                  type="text"
                  placeholder="Sudoku Solvers - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sudoku2cat3}
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

            {formik.values.checked.find(
              (value) => value === "mathathoncat1"
            ) ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Mathathon (Category 1)
                </label>
                <input
                  id="mathathon1cat1"
                  name="mathathon1cat1"
                  type="text"
                  placeholder="Mathathon - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon1cat1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="mathathon2cat1"
                  name="mathathon2cat1"
                  type="text"
                  placeholder="Mathathon - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon2cat1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="mathathon3cat1"
                  name="mathathon3cat1"
                  type="text"
                  placeholder="Mathathon - Participant 3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon3cat1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="mathathon4cat1"
                  name="mathathon4cat1"
                  type="text"
                  placeholder="Mathathon - Participant 4"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon4cat1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find(
              (value) => value === "mathathoncat2"
            ) ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Mathathon (Category 2)
                </label>
                <input
                  id="mathathon1cat2"
                  name="mathathon1cat2"
                  type="text"
                  placeholder="Mathathon - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon1cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="mathathon2cat2"
                  name="mathathon2cat2"
                  type="text"
                  placeholder="Mathathon - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon2cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="mathathon3cat2"
                  name="mathathon3cat2"
                  type="text"
                  placeholder="Mathathon - Participant 3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon3cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="mathathon4cat1"
                  name="mathathon4cat1"
                  type="text"
                  placeholder="Mathathon - Participant 4"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon4cat1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find(
              (value) => value === "mathathoncat3"
            ) ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Mathathon (Category 3)
                </label>
                <input
                  id="mathathon1cat3"
                  name="mathathon1cat3"
                  type="text"
                  placeholder="Mathathon - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon1cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="mathathon2cat3"
                  name="mathathon2cat3"
                  type="text"
                  placeholder="Mathathon - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon2cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="mathathon3cat3"
                  name="mathathon3cat3"
                  type="text"
                  placeholder="Mathathon - Participant 3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon3cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="mathathon4cat3"
                  name="mathathon4cat3"
                  type="text"
                  placeholder="Mathathon - Participant 4"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mathathon4cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "cubecat1") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Cube Maestro (Category 1)
                </label>
                <input
                  id="cube1cat1"
                  name="cube1cat1"
                  type="text"
                  placeholder="Cube Maestro - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cube1cat1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="cube2cat1"
                  name="cube2cat1"
                  type="text"
                  placeholder="Cube Maestro - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cube2cat1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "cubecat2") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Cube Maestro (Category 2)
                </label>
                <input
                  id="cube1cat2"
                  name="cube1cat2"
                  type="text"
                  placeholder="Cube Maestro - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cube1cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="cube2cat2"
                  name="cube2cat2"
                  type="text"
                  placeholder="Cube Maestro - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cube2cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find((value) => value === "cubecat3") ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Cube Maestro (Category 3)
                </label>
                <input
                  id="cube1cat3"
                  name="cube1cat3"
                  type="text"
                  placeholder="Cube Maestro - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cube1cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="cube2cat3"
                  name="cube2cat3"
                  type="text"
                  placeholder="Cube Maestro - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cube2cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find(
              (value) => value === "quizzicalcat1"
            ) ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Let&apos;s get Quizzical (Category 1)
                </label>
                <input
                  id="quizzical1cat1"
                  name="quizzical1cat1"
                  type="text"
                  placeholder="Let's get Quizzical - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.quizzical1cat1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="quizzical2cat1"
                  name="quizzical2cat1"
                  type="text"
                  placeholder="Let's get Quizzical - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.quizzical2cat1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find(
              (value) => value === "quizzicalcat2"
            ) ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Let&apos;s get Quizzical (Category 2)
                </label>
                <input
                  id="quizzical1cat2"
                  name="quizzical1cat2"
                  type="text"
                  placeholder="Let's get Quizzical - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.quizzical1cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="quizzical2cat2"
                  name="quizzical2cat2"
                  type="text"
                  placeholder="Let's get Quizzical - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.quizzical2cat2}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
              </div>
            ) : null}

            {formik.values.checked.find(
              (value) => value === "quizzicalcat3"
            ) ? (
              <div className="pt-5">
                <label className="text-base md:text-xl font-bold">
                  Let&apos;s get Quizzical (Category 3)
                </label>
                <input
                  id="quizzical1cat3"
                  name="quizzical1cat3"
                  type="text"
                  placeholder="Let's get Quizzical - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.quizzical1cat3}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="quizzical2cat3"
                  name="quizzical2cat3"
                  type="text"
                  placeholder="Let's get Quizzical - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.quizzical2cat3}
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
                  name="ninjas1"
                  type="text"
                  placeholder="Number Ninjas - Participant 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ninjas1}
                  className="border-2 block w-full mt-1 mb-5 text-sm md:text-xl p-2 rounded-lg"
                  required
                />
                <input
                  id="ninjas2"
                  name="ninjas2"
                  type="text"
                  placeholder="Number Ninjas - Participant 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ninjas2}
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
