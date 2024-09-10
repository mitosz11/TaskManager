import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { createTask } from '../services/taskService.js';
import { TASK_PRIORITY } from '../constants/taskPriority.js';
import { TASK_CATEGORY } from '../constants/taskCategory.js';

export default ({ refreshTasks }) => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState(TASK_PRIORITY.LOW);
    const [category, setCategory] = useState(TASK_CATEGORY.OTHER);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTask({ title, priority, category });
        setTitle('');
        setPriority(TASK_PRIORITY.LOW);
        setCategory(TASK_CATEGORY.OTHER);
        refreshTasks();
    };

    return (
      <div className="flex justify-center items-center w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-500 p-6 rounded shadow-lg w-full"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
            Add New Task
          </h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 dark:bg-gray-200 focus:ring-blue-600 dark:text-gray-900"
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all flex items-center justify-center"
          >
            <FaPlus className="mr-2" /> Add Task
          </button>
        </form>
      </div>
    );
};
