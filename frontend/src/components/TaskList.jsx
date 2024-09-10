import { useEffect, useState } from 'react';
import { getTasks } from '../services/taskService';
import CategoryFilter from "./filters/CategoryFilter.jsx";
import TaskItem from './TaskItem';
import PriorityFilter from "./filters/PriorityFilter.jsx";

export default () => {
    const [tasks, setTasks] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [priorityFilter, setPriorityFilter] = useState('All');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const { data } = await getTasks();
        setTasks(data);
    };

    const sortedTasks = tasks.sort((task1, task2) => {
        if (task1.completed !== task2.completed) {
            return task1.completed ? 1 : -1;
        }
        return new Date(task2.createdAt) - new Date(task1.createdAt);
    });

    const filteredTasks = sortedTasks.filter((task) => {
        const categoryMatch = categoryFilter === 'All' || task.category === categoryFilter;
        const priorityMatch = priorityFilter === 'All' || task.priority === priorityFilter;
        return categoryMatch && priorityMatch;
    });

    return (
        <>
            <div className="flex flex-col items-center mt-8 w-full">
                <div className="flex items-center gap-4 w-full">
                    <CategoryFilter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
                    <PriorityFilter priorityFilter={priorityFilter} setPriorityFilter={setPriorityFilter} />
                </div>
                {filteredTasks.length > 0 && (
                    <div className="flex flex-col w-full mt-8 gap-4">
                        {filteredTasks.map((task) => (
                            <TaskItem key={task.id} task={task} refreshTasks={fetchTasks}/>
                        ))}
                    </div>
                ) || (
                    <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
                        No tasks found!
                    </div>
                )}
            </div>
        </>
    );
};
