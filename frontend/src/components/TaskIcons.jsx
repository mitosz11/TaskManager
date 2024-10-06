import {
  FcMediumPriority,
  FcLowPriority,
  FcHighPriority,
} from "react-icons/fc";

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
      return <img className="w-8" src="/home.png" alt="Home Icon" />;
    case "WORK":
      return <img className="w-8" src="/work.png" alt="Work Icon" />;
    case "GLOCERIES":
      return <img className="w-8" src="/shop.png" alt="Groceries Icon" />;
    case "OTHER":
      return <img className="w-8" src="/other.png" alt="Other Icon" />;
    default:
      return null;
  }
};
