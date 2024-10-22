import * as Yup from "yup";

const taskValidationSchema = Yup.object({
  title: Yup.string().required("Task title is required"),
});

export default taskValidationSchema;
