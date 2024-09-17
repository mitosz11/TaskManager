import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .max(16, "First name must not be more than 16 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .max(16, "Lastname must not be more than 16 characters"),
  email: Yup.string()
    .required("Email is required")
    .min(5, "Email must be at least 5 character")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must have at least 6 characters")
    .max(50, "Max password length is 50")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

export { registerSchema };
