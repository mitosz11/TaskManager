import { useState } from "react";
import { FiCheckCircle, FiCircle } from "react-icons/fi";
import {
  FcMediumPriority,
  FcLowPriority,
  FcHighPriority,
} from "react-icons/fc";
import {
  FaSuitcase,
  FaQuestion,
  FaTrash,
} from "react-icons/fa6";
import { FaEdit, FaHome } from "react-icons/fa";
import { updateTask, deleteTask } from "../services/taskService";
import TaskEditModal from "./TaskEditModal";

export default ({ task, refreshTasks }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleCompletion = async () => {
    await updateTask(task.id, { ...task, completed: !task.completed });
    refreshTasks();
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    refreshTasks();
  };

  const closeModal = () => {
    setIsEditing(false);
  };

  const renderPriorityIcon = () => {
    switch (task.priority) {
      case "LOW":
        return <FcLowPriority />;
      case "MEDIUM":
        return <FcMediumPriority />;
      case "HIGH":
        return <FcHighPriority />;
      default:
        return null;
    }
  };

  const renderCategoryIcon = () => {
    switch (task.category) {
      case "HOME":
        return <FaHome className="text-gray-900" />;
      case "WORK":
        return <FaSuitcase className="text-gray-900" />;
      case "OTHER":
        return <FaQuestion className="text-gray-900" />;
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className={`p-4 rounded shadow-md flex justify-between items-center 
    ${task.completed ? "bg-green-700" : "bg-white dark:bg-gray-200"}`}
      >
        <div className="flex space-x-4 items-center">
          {task.completed ? (
            <FiCheckCircle
              className="text-gray-900 cursor-pointer"
              onClick={toggleCompletion}
            />
          ) : (
            <FiCircle
              className="text-gray-900 cursor-pointer"
              onClick={toggleCompletion}
            />
          )}
          {renderPriorityIcon()}
          {renderCategoryIcon()}
        </div>
        <h3
          className={`text-lg ${
            task.completed ? "text-white" : "text-gray-900"
          } font-medium`}
        >
          {task.title}
        </h3>
        <div className="flex space-x-4 items-center">
          <FaEdit
            onClick={() => setIsEditing(true)}
            className={`cursor-pointer hover:text-blue-700 ${"text-blue-600"}`}
          />
          <FaTrash
            onClick={handleDelete}
            className={`cursor-pointer hover:text-red-600 ${"text-red-500"}`}
          />
        </div>
      </div>
      {isEditing && (
        <TaskEditModal
          task={task}
          onClose={closeModal}
          refreshTasks={refreshTasks}
        />
      )}
    </>
  );
};
