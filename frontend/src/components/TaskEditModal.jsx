import { useState } from 'react';
import { updateTask } from '../services/taskService';
import {FaTimes} from "react-icons/fa";
import {FaFloppyDisk} from "react-icons/fa6";

export default ({ task, onClose, refreshTasks }) => {
    const [title, setTitle] = useState(task.title);
    const [priority, setPriority] = useState(task.priority);
    const [category, setCategory] = useState(task.category);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateTask(task.id, { ...task, title, priority, category });
        refreshTasks();
        onClose();
    };

    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-400 p-6 rounded shadow-lg">
          <h3 className="text-xl text-center font-semibold mb-4 dark:text-gray-900">
            Edit Task
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:bg-gray-200 rounded mb-4 focus:outline-none focus:ring-blue-600 dark:text-gray-900"
              required
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 dark:bg-gray-200 focus:ring-blue-600 dark:text-gray-900"
            >
              <option value="HOME">Home</option>
              <option value="WORK">Work</option>
              <option value="OTHER">Other</option>
            </select>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 dark:bg-gray-200 focus:ring-blue-600 dark:text-gray-900"
            >
              <option value="LOW">Low Priority</option>
              <option value="MEDIUM">Medium Priority</option>
              <option value="HIGH">High Priority</option>
            </select>
            <div className="flex justify-between space-x-2">
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 py-2 rounded hover:bg-yellow-500 transition-all flex items-center justify-center"
              >
                <FaFloppyDisk className="mr-2" /> Edit
              </button>

              <button
                onClick={onClose}
                className="w-full bg-red-500 text-gray-900 py-2 rounded hover:bg-red-600 transition-all flex items-center justify-center"
              >
                <FaTimes className="mr-2" /> Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};
