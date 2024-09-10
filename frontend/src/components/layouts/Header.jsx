import DarkModeToggle from "./DarkModeToggle";

export default () => {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-8">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-600">Task Manager</h1>
                <DarkModeToggle/>
            </div>
        </header>
    )
};