import * as yup from "yup";

export const formSchema = new yup.ObjectSchema({
  schoolName: yup
    .string()
    .trim()
    .min(1)
    .max(200)
    .required("School Name is a required field."),
  schoolRepresentativeName: yup
    .string()
    .trim()
    .min(1)
    .max(150)
    .required("School Representative Name is a required field."),
  schoolRepresentativeEmail: yup
    .string()
    .email("School Representative Name need to be a valid email.")
    .trim()
    .required("School Representative Email is a required field."),
  schoolRepresentativePhone: yup
    .string()
    .trim()
    .length(10, "School Representative Phone must be of 10 digits.")
    .required("School Representative Phone is a required field."),
});
