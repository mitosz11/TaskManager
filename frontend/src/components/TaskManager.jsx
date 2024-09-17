import { useState } from "react";
import TaskList from "./TaskList";
import TaskCreate from "./TaskCreate";

export default () => {
  const [refresh, setRefresh] = useState(false);
  const refreshTasks = () => setRefresh(!refresh);

  return (
    <>
      <section className="flex flex-col w-full min-h-dvh max-w-xl mx-auto">
        <TaskCreate refreshTasks={refreshTasks} />
        <TaskList key={refresh} />
      </section>
    </>
  );
};
