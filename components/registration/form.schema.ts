import * as yup from "yup";

export const formSchema = new yup.ObjectSchema({
  schoolName: yup.string().trim().min(1).max(200).required(),
  schoolRepresentativeName: yup.string().trim().min(1).max(150).required(),
  schoolRepresentativeEmail: yup.string().email().trim().required(),
  schoolRepresentativePhone: yup.string().trim().length(10).required(),
});
