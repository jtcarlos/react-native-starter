import * as yup from "yup";

export const greeterValidationSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
});
