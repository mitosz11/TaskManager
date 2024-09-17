import { useContext, useState } from "react";
import { FiCheckCircle, FiCircle } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import { PriorityIcon, CategoryIcon } from "../components/TaskIcons";
import TaskEditModal from "./TaskEditModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal"; 
import AuthContext from "../contexts/AuthContext";
import { updateTask, deleteTask } from "../services/taskService";

export default ({ task, refreshTasks }) => {
  const { user } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  const toggleCompletion = async () => {
    await updateTask(
      task.id,
      { ...task, completed: !task.completed },
      user.token
    );
    refreshTasks();
  };

  const handleDelete = async () => {
    await deleteTask(task.id, user.token);
    refreshTasks();
  };

  const closeModal = () => {
    setIsEditing(false);
  };

  const openDeleteConfirmModal = () => {
    setIsDeleteConfirmOpen(true);
  };

  const closeDeleteConfirmModal = () => {
    setIsDeleteConfirmOpen(false);
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
          <PriorityIcon priority={task.priority} />
          <CategoryIcon category={task.category} />
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
            className="cursor-pointer hover:text-yellow-700 text-yellow-500"
          />
          <FaTrash
            onClick={openDeleteConfirmModal}
            className="cursor-pointer hover:text-red-700 text-red-500"
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
      <ConfirmDeleteModal
        isOpen={isDeleteConfirmOpen}
        onClose={closeDeleteConfirmModal}
        onConfirm={handleDelete}
        task={task}
      />
    </>
  );
};
