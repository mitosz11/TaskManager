import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import taskValidationSchema from "../schemas/taskSchema.js";
import { createTask } from "../services/taskService.js";
import { TASK_PRIORITY } from "../constants/taskPriority.js";
import { TASK_CATEGORY } from "../constants/taskCategory.js";
import AuthContext from "../contexts/AuthContext.jsx";

export default ({ refreshTasks }) => {
  const { user } = useContext(AuthContext);

  const initialValues = {
    title: "",
    priority: TASK_PRIORITY.LOW,
    category: TASK_CATEGORY.OTHER,
    dueDate: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    await createTask(values, user.token);
    resetForm();
    refreshTasks();
  };

  return (
    <div className="flex justify-center items-center w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={taskValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <Form className="bg-white dark:bg-gray-500 p-6 rounded shadow-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
              Add New Task
            </h2>
            <div className="mb-4">
              <Field
                type="text"
                name="title"
                placeholder="Enter task title"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 dark:bg-gray-200 focus:ring-blue-600 dark:text-gray-900"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <Field
                as="select"
                name="category"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 dark:bg-gray-200 focus:ring-blue-600 dark:text-gray-900"
              >
                <option value="HOME">Home</option>
                <option value="WORK">Work</option>
                <option value="GLOCERIES">Groceries</option>
                <option value="OTHER">Other</option>
              </Field>
            </div>
            <div className="mb-4">
              <Field
                as="select"
                name="priority"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 dark:bg-gray-200 focus:ring-blue-600 dark:text-gray-900"
              >
                <option value="LOW">Low Priority</option>
                <option value="MEDIUM">Medium Priority</option>
                <option value="HIGH">High Priority</option>
              </Field>
            </div>
            <div className="mb-4">
              <Field
                type="date"
                name="dueDate"
                min={new Date().toISOString().split("T")[0]}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 dark:bg-gray-200 focus:ring-blue-600 dark:text-gray-900"
                placeholder="mm/dd/yyyy"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all flex items-center justify-center"
            >
              <FaPlus className="mr-2" /> Add Task
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
