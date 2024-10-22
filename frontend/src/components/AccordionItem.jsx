import { useState } from "react";
import { motion } from "framer-motion";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 dark:border-gray-700">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center py-4 focus:outline-none transition duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 px-4"
      >
        <span className="text-lg font-medium dark:text-gray-300">{title}</span>
        <span className="text-2xl text-gray-500 dark:text-gray-400">
          {isOpen ? "-" : "+"}
        </span>
      </button>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-4 py-2 text-gray-600 dark:text-gray-400">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
