import {
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import validationSchema from "../../schemas/loginSchema.js";
import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import AuthContext from "../../contexts/AuthContext.jsx";
import { toast } from "react-toastify";

const initialValues = {
  email: "",
  password: "",
};

export default ({ onClose, email }) => {
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      const result = await login(values.email, values.password);
      if (result.ok) {
        toast.success("You are logged in.");
        onClose();
      } else {
        toast.error(result.message);
        setErrors({ submit: result.message });
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (email) {
      formik.setFieldValue("email", email);
    }
  }, [email]);

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <div className="relative mb-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          <FaEnvelope className="inline-block mr-2" />
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-700 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="relative mb-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          <FaLock className="inline-block mr-2" />
          Password
        </label>
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          className="mt-1 block w-full px-3 py-2 border border-gray-700 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...formik.getFieldProps("password")}
        />
        <button
          type="button"
          className="absolute right-0 top-1 flex items-center pr-3 text-gray-700"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-600 text-sm mt-1">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <img className="" src="/todo.png" alt="img" />

      <button
        type="submit"
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <FaSignInAlt className="mr-2" />
        Login
      </button>
    </form>
  );
};
