export default ({ priorityFilter, setPriorityFilter }) => {
  return (
    <div className="flex justify-center w-full">
      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
        className="w-full py-2 px-4 border rounded focus:outline-none dark:bg-gray-200 focus:ring-blue-600 dark:text-gray-900"
      >
        <option value="All">All Priorities</option>
        <option value="LOW">Low</option>
        <option value="MEDIUM">Medium</option>
        <option value="HIGH">High</option>
      </select>
    </div>
  );
};
