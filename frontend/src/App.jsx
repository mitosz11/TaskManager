import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskCreate from './components/TaskCreate';
import Layout from './layouts/Layout';

export default () => {
    const [refresh, setRefresh] = useState(false);
    const refreshTasks = () => setRefresh(!refresh);

    return (
        <Layout>
            <section className="flex flex-col w-full min-h-dvh max-w-xl mx-auto">
                <TaskCreate refreshTasks={refreshTasks}/>
                <TaskList key={refresh}/>
            </section>
        </Layout>
    );
};
