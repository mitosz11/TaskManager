import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaUserPlus,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import AuthContext from "../../contexts/AuthContext.jsx";
import validationSchema from "../../schemas/registrationSchema.js";
import { toast } from "react-toastify";
import ClickableToast from "../ClickableToast";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordAgain: "",
};

export default ({ onClose, switchToLogin }) => {
  const { register } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState({
    password: false,
    passwordAgain: false,
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      const { passwordAgain, ...filteredValues } = values;
      const result = await register(filteredValues);
      if (!result.ok) {
        if (result.message === "Email already in use") {
          toast.warning(
            <ClickableToast
              message={result.message}
              onClick={switchToLogin}
              email={values.email}
            />
          );
          setErrors({ errorMessage: result.message });
          setSubmitting(false);
        } else {
          toast.error(result.message);
          setErrors({ errorMessage: result.message });
          setSubmitting(false);
        }
      } else {
        toast.info("Registration successful");
        onClose();
      }
    },
  });

  function handleShowPassword(key) {
    setShowPassword((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  }

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="relative mb-2">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            <FaUser className="inline-block mr-2" />
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-700 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
        <div className="relative mb-2">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            <FaUser className="inline-block mr-2" />
            Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-700 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>
      </div>
      <div className="grid gap-2 mb-2">
        <div className="relative mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            <FaEnvelope className="inline-block mr-2" />
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-700 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-2 relative">
        <div className="relative mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            <FaLock className="inline-block mr-2" />
            Password *
          </label>
          <input
            id="password"
            name="password"
            type={showPassword.password ? "text" : "password"}
            className="mt-1 block w-full px-3 py-2 border border-gray-700 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...formik.getFieldProps("password")}
          />
          <button
            type="button"
            className="absolute right-0 top-1 flex items-center pr-3 text-gray-700"
            onClick={() => handleShowPassword("password")}
          >
            {showPassword.password ? <FaEyeSlash /> : <FaEye />}
          </button>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div className="relative mb-2">
          <label
            htmlFor="passwordAgain"
            className="block text-sm font-medium text-gray-700"
          >
            <FaLock className="inline-block mr-2" />
            Password Again *
          </label>
          <input
            id="passwordAgain"
            name="passwordAgain"
            type={showPassword.passwordAgain ? "text" : "password"}
            className="mt-1 block w-full px-3 py-2 border border-gray-700 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...formik.getFieldProps("passwordAgain")}
          />
          <button
            type="button"
            className="absolute right-0 top-1 flex items-center pr-3 text-gray-700"
            onClick={() => handleShowPassword("passwordAgain")}
          >
            {showPassword.passwordAgain ? <FaEyeSlash /> : <FaEye />}
          </button>
          {formik.touched.passwordAgain && formik.errors.passwordAgain ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.passwordAgain}
            </div>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center px-4 py-2 mt-9 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <FaUserPlus className="mr-2" />
        Register
      </button>
    </form>
  );
};
