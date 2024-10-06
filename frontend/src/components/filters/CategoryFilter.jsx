export default ({ categoryFilter, setCategoryFilter }) => {
  return (
    <div className="flex justify-center w-full">
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="w-full py-2 px-4 border rounded focus:outline-none focus:ring-2 dark:bg-gray-200 focus:ring-blue-600 dark:text-gray-900"
      >
        <option value="All">All Categories</option>
        <option value="HOME">Home</option>
        <option value="WORK">Work</option>
        <option value="GLOCERIES">Gloceries</option>
        <option value="OTHER">Other</option>
      </select>
    </div>
  );
};
