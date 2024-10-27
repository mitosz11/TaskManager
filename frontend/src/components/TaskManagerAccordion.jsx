import {
  FaUserPlus,
  FaSignInAlt,
  FaTasks,
  FaEdit,
  FaTrash,
  FaCheck,
  FaCalendarAlt,
  FaMoon,
  FaFilter,
  FaSort,
} from "react-icons/fa";
import AccordionItem from "./AccordionItem";

const TaskManagerAccordion = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-md dark:bg-gray-800 dark:shadow-none">
      <h2 className="text-3xl font-bold text-center py-6 text-gray-800 dark:text-gray-300">
        Task Manager Features
      </h2>
      <AccordionItem
        title={
          <>
            <FaUserPlus className="inline-block mr-5" />
            User Registration
          </>
        }
      >
        <p className="mb-2">
          With the <strong>user registration</strong> feature, you can sign up
          to create your own account. This allows you to securely manage your
          tasks and keep track of your personal to-do list.
        </p>
        <p>
          Your account will enable you to store tasks persistently, even when
          you log out or switch devices, ensuring that your tasks are always
          accessible.
        </p>
      </AccordionItem>

      <AccordionItem
        title={
          <>
            <FaSignInAlt className="inline-block mr-5" />
            User Login
          </>
        }
      >
        <p className="mb-2">
          Once registered, you can log in to access your task list from any
          device. The <strong>login system</strong> ensures that your tasks are
          kept private and secure.
        </p>
        <p>
          Only you can view and manage your tasks, offering a personalized and
          safe task management experience.
        </p>
      </AccordionItem>

      <AccordionItem
        title={
          <>
            <FaTasks className="inline-block mr-5" />
            Add Tasks
          </>
        }
      >
        <p className="mb-2">
          The <strong>task addition</strong> feature allows you to create new
          tasks quickly and easily. You can assign a <strong>title</strong>, set
          a <strong>category</strong> (such as personal, work, or gloceries),
          select a <strong>priority</strong> level (low, normal, high), and
          choose a <strong>due date</strong>.
        </p>
      </AccordionItem>

      <AccordionItem
        title={
          <>
            <FaEdit className="inline-block mr-5" />
            Edit Tasks
          </>
        }
      >
        <p className="mb-2">
          Need to update a task? The <strong>task editing</strong> feature
          allows you to modify any task details using a modal box that pops up
          for easy access.
        </p>
        <p>
          You can change the title, category, priority, or due date, ensuring
          your tasks are always up-to-date and relevant.
        </p>
      </AccordionItem>

      <AccordionItem
        title={
          <>
            <FaTrash className="inline-block mr-5" />
            Delete Tasks
          </>
        }
      >
        <p className="mb-2">
          When a task is no longer needed, you can easily remove it from your
          list.
        </p>
        <p>
          The <strong>delete task</strong> feature helps keep your task list
          clean and organized, focusing on what matters most.
        </p>
      </AccordionItem>

      <AccordionItem
        title={
          <>
            <FaCheck className="inline-block mr-5" />
            Mark as Completed
          </>
        }
      >
        <p className="mb-2">
          Once you've finished a task, you can{" "}
          <strong>mark it as completed</strong>.
        </p>
        <p>
          Completed tasks will be visually highlighted and moved to a separate
          section, keeping your active tasks front and center.
        </p>
      </AccordionItem>

      <AccordionItem
        title={
          <>
            <FaCalendarAlt className="inline-block mr-5" />
            Set Due Date
          </>
        }
      >
        <p className="mb-2">
          You can set a <strong>due date</strong> for each task to ensure that
          deadlines are met.
        </p>
        <p>
          This feature helps you prioritize tasks based on their urgency and
          importance, giving you more control over your workflow.
        </p>
      </AccordionItem>

      <AccordionItem
        title={
          <>
            <FaMoon className="inline-block mr-5" />
            Dark/Light Mode
          </>
        }
      >
        <p className="mb-2">
          The Task Manager supports both <strong>dark</strong> and{" "}
          <strong>light</strong> modes, allowing you to choose the theme that
          best suits your preferences and working environment.
        </p>
      </AccordionItem>

      <AccordionItem
        title={
          <>
            <FaFilter className="inline-block mr-5" />
            Filter Tasks
          </>
        }
      >
        <p className="mb-2">
          The <strong>filtering feature</strong> helps you quickly find tasks by
          category or priority.
        </p>
        <p>
          Whether you're looking for work-related tasks or high-priority items,
          the filter makes managing large task lists much easier.
        </p>
      </AccordionItem>

      <AccordionItem
        title={
          <>
            <FaSort className="inline-block mr-5" />
            Task Sorting
          </>
        }
      >
        <p className="mb-2">
          The Task Manager automatically sorts your tasks, ensuring that the
          most recent tasks appear at the top.
        </p>
        <p>
          Completed tasks are moved to the bottom, helping you stay focused on
          what's most important.
        </p>
      </AccordionItem>
    </div>
  );
};

export default TaskManagerAccordion;
