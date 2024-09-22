# Task Manager
============

## Description
-----------

The Task Manager is a full-stack application built with **React** (frontend) and **Node.js** (backend) using **PostgreSQL** for database management. It allows users to create, edit, delete, and mark tasks as completed. Tasks can be categorized into "Home", "Work", or "Other", and have different priorities such as "Low", "Medium", or "High". The app also includes dark/light mode switching and filtering capabilities by category, priority, and completion status.

### Authentication
Users must **register** and **log in** to access the task management features. Each user will have their own task list, ensuring that tasks are private and secure.

The project is structured with **clean code principles**, utilizing **SOLID design patterns** and adhering to the **Twelve-Factor App** methodology for scalable and maintainable software.

This project also supports light/dark theme switching, task filtering by category and priority, and task due dates.

## Features
-------- 

-   **User Registration**: Sign up to create an account and manage your tasks.
-   **User Login**: Securely log in to access your task list.
-   **Add Tasks**: Create new tasks with a title, category, priority, and due date.
-   **Edit Tasks**: Update task title and other details using a modal box.
-   **Delete Tasks**: Remove tasks that are no longer needed.
-   **Mark as Completed**: Mark tasks as completed and visually highlight them.
-   **Dark/Light Mode**: Toggle between dark and light themes.
-   **Filter Tasks**: Filter tasks by category and priority.
-   **Task Sorting**: Automatically sort tasks with the most recent at the top and completed tasks at the bottom.

Screenshots
-----------

### Light Mode
![image](docs/light.png)

### Dark Mode
![image](docs/dark.png)

* * * * *

Tech Stack
----------

### Frontend

-   **React**: JavaScript framework for building the user interface.
-   **Vite**: Bundler for fast development and production builds.
-   **Tailwind CSS**: Utility-first CSS framework for styling.
-   **Flowbite**: UI components built with Tailwind CSS for rapid UI development.
-   **Axios**: For making HTTP requests to the backend API.

### Backend

-   **Node.js**: JavaScript runtime for server-side logic.
-   **Express.js**: Web framework for building REST APIs.
-   **Prisma ORM**: Database ORM for working with PostgreSQL.
-   **PostgreSQL**: Relational database management system.
-   **CORS**: Middleware for handling cross-origin requests.
-   **dotenv**: For managing environment variables.

* * * * *

Getting Started
---------------

### Prerequisites

Before running the project, ensure you have the following installed on your system:

-   **Node.js** (v14+)
-   **Yarn** (Package manager)
-   **PostgreSQL** (v12+)

### Project Structure

The project is divided into two main parts:

1.  **Frontend**: Located in the `/frontend` directory (React + Vite).
2.  **Backend**: Located in the `/backend` directory (Node.js + Express).

### 1. Clone the Repository

```bash
git clone https://github.com/mitosz11/TaskManager.git
cd task-manager
```

### 2. Setup Environment Variables

In the `/backend` directory, create a `.env` file for environment variables:

```bash
cd backend
touch .env
```

Add the following variables to the `.env` file:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/taskmanager"
PORT=8080
```

Update the `DATABASE_URL` to match your PostgreSQL credentials.


This command starts both the backend and frontend development servers. The frontend will run on http://localhost:5173 (default), and the backend will run on http://localhost:8080.

### 3. Access the Application

Open your browser and navigate to: http://localhost:5173

Here you can begin adding and managing your tasks.


Backend Setup (Manual)
----------------------

If you prefer to run the backend manually:

1. Navigate to the `backend` directory:
```bash
cd backend
```

2. Install backend dependencies:
```bash
yarn
```

3. Set up your database by running Prisma migrations:
```bash
yarn prisma migrate dev --name init
```

4. Start the backend server:
```bash
yarn dev
```

The backend server should now be running at http://localhost:8080.

* * * * *

Frontend Setup (Manual)
-----------------------

To run the frontend manually:

1. Navigate to the `frontend` directory:
```bash
cd frontend
```

2. Install frontend dependencies:
```bash
yarn
```

3. Start the development server:
```bash
yarn dev
```

The frontend should now be running at http://localhost:5173.

* * * * *


Contact
-------

If you have any questions or feedback, feel free to contact us at `bsalgoi@gmail.com`.