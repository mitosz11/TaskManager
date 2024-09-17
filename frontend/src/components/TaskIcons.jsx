import {
  FcMediumPriority,
  FcLowPriority,
  FcHighPriority,
} from "react-icons/fc";
import { FaSuitcase, FaQuestion, FaHome } from "react-icons/fa";

export const PriorityIcon = ({ priority }) => {
  switch (priority) {
    case "LOW":
      return <FcLowPriority />;
    case "MEDIUM":
      return <FcMediumPriority />;
    case "HIGH":
      return <FcHighPriority />;
    default:
      return null;
  }
};

export const CategoryIcon = ({ category }) => {
  switch (category) {
    case "HOME":
      return <FaHome className="text-gray-900" />;
    case "WORK":
      return <FaSuitcase className="text-gray-900" />;
    case "OTHER":
      return <FaQuestion className="text-gray-900" />;
    default:
      return null;
  }
};
