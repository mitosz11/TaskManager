import { useContext, useEffect, useState } from "react";
import { getTasks } from "../services/taskService";
import CategoryFilter from "./filters/CategoryFilter.jsx";
import TaskItem from "./TaskItem";
import PriorityFilter from "./filters/PriorityFilter.jsx";
import AuthContext from "../contexts/AuthContext.jsx"

export default () => {
  const [tasks, setTasks] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

 const { user } = useContext(AuthContext); 

  const fetchTasks = async () => {
    try {
      const response = await getTasks(user.token); 
      setTasks(response.data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchTasks();
    }
  }, [user]);

  const sortedTasks = tasks.sort((task1, task2) => {
    if (task1.completed !== task2.completed) {
      return task1.completed ? 1 : -1;
    }
    return new Date(task2.createdAt) - new Date(task1.createdAt);
  });

  const filteredTasks = sortedTasks.filter((task) => {
    const categoryMatch =
      categoryFilter === "All" || task.category === categoryFilter;
    const priorityMatch =
      priorityFilter === "All" || task.priority === priorityFilter;
    return categoryMatch && priorityMatch;
  });

  const todoTasks = filteredTasks.filter((task) => !task.completed);
  const completedTasks = filteredTasks.filter((task) => task.completed);

  return (
    <div className="flex flex-col items-center mt-8 w-full px-4 max-w-screen-md mx-auto">
      <div className="flex items-center gap-4 w-full">
        <CategoryFilter
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
        <PriorityFilter
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
        />
      </div>
      <div className="flex flex-col w-full mt-8 gap-4">
        <h2 className="text-2xl font-bold text-center dark:text-gray-400">
          Tasks
        </h2>
        {todoTasks.length > 0 ? (
          todoTasks.map((task) => (
            <TaskItem key={task.id} task={task} refreshTasks={fetchTasks} />
          ))
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No tasks found!
          </div>
        )}
      </div>
      <div className="flex flex-col w-full mt-8 gap-4">
        <h2 className="text-2xl font-bold text-center dark:text-gray-400">
          Completed Tasks
        </h2>
        {completedTasks.length > 0 ? (
          completedTasks.map((task) => (
            <TaskItem key={task.id} task={task} refreshTasks={fetchTasks} />
          ))
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No completed tasks!
          </div>
        )}
      </div>
    </div>
  );
};
