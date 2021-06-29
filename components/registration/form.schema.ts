import * as yup from "yup";

export const formSchema = new yup.ObjectSchema({
  schoolName: yup
    .string()
    .trim()
    .min(1)
    .max(200)
    .required("School Name is a required field."),
  schoolEmail: yup
    .string()
    .email("School Email needs to be a valid email.")
    .trim()
    .required("School Email is a required field."),
  schoolPrincipal: yup
    .string()
    .trim()
    .min(1)
    .max(200)
    .required("School Principal is a required field."),
  studentRepresentativeName: yup
    .string()
    .trim()
    .min(1)
    .max(150)
    .required("Student Representative Name is a required field."),
  studentRepresentativeEmail: yup
    .string()
    .email("Student Representative Email needs to be a valid email.")
    .trim()
    .required("Student Representative Email is a required field."),
  studentRepresentativePhone: yup
    .string()
    .trim()
    .length(10, "Student Representative Phone must be of 10 digits.")
    .required("Student Representative Phone is a required field."),
  teacherRepresentativeName: yup
    .string()
    .trim()
    .min(1)
    .max(150)
    .required("Teacher Representative Name is a required field."),
  teacherRepresentativeEmail: yup
    .string()
    .email("Teacher Representative Email need to be a valid email.")
    .trim()
    .required("Teacher Representative Email is a required field."),
  teacherRepresentativePhone: yup
    .string()
    .trim()
    .length(10, "Teacher Representative Phone must be of 10 digits.")
    .required("Teacher Representative Phone is a required field."),
});
