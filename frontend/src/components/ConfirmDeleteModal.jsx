import React from "react";
import { FaTrash, FaTimes } from "react-icons/fa";

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, task }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-gray-900 opacity-70"
        onClick={onClose}
      ></div>
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-md mx-auto relative z-10 border border-gray-300 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaTrash className="text-red-600 text-2xl" />
          <span>Confirm Delete</span>
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Are you sure you want to delete the following task?
        </p>
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-4 text-gray-800 dark:text-gray-100">
            <div className="font-medium">Title:</div>
            <div className="font-medium text-right">{task.title}</div>
            <div className="font-medium">Category:</div>
            <div className="font-medium text-right">{task.category}</div>
            <div className="font-medium">Priority:</div>
            <div className="font-medium text-right">{task.priority}</div>
            <div className="font-medium">Completed:</div>
            <div className="font-medium text-right">
              {task.completed ? "YES" : "NO"}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onConfirm}
            className="w-full bg-red-500 text-gray-900 py-2 rounded hover:bg-red-600 transition-all flex items-center justify-center"
          >
            <FaTrash className="mr-2" />
            Delete
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-300 text-gray-900 py-2 rounded hover:bg-gray-400 transition-all flex items-center justify-center"
          >
            <FaTimes className="mr-2" />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
