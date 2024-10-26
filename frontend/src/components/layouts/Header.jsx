import { useState, useContext } from "react";
import DarkModeToggle from "./DarkModeToggle";
import AuthContext from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import AuthModal from "../AuthModal/AuthModal";
import { MdLogout, MdLogin } from "react-icons/md";

export default function Header() {
  const { user, logout } = useContext(AuthContext); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate("/");
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
          <img className="md:w-32 w-14" src="/todo.png" alt="todo" />
          </Link>
          <nav className="flex flex-grow justify-center items-center uppercase font-bold">
            <Link
              to="/"
              className="px-4 py-2 text-blue-600 dark:text-blue-300 rounded-lg transition-colors duration-300 hover:bg-blue-100 dark:hover:bg-blue-700"
            >
              Home
            </Link>
            {user && (
              <Link
                to="/taskManager"
                className="px-4 py-2 text-blue-600 dark:text-blue-300 rounded-lg transition-colors duration-300 hover:bg-blue-100 dark:hover:bg-blue-700"
              >
                Tasks
              </Link>
            )}
          </nav>
          <div className="flex items-center gap-1">
            <DarkModeToggle />
            {user ? (
              <>
                <p className="hidden md:block text-gray-800 dark:text-gray-300 text-xl">
                  Hello <strong>{user.firstName}</strong>
                </p>
                <MdLogout
                  onClick={handleLogout}
                  className="text-red-600 text-3xl cursor-pointer transition-colors duration-300 hover:text-red-800 dark:hover:text-red-400"
                />
              </>
            ) : (
              <MdLogin
                onClick={() => setIsModalOpen(true)}
                className="text-green-600 text-3xl cursor-pointer transition-colors duration-300 hover:text-green-800 dark:hover:text-green-400"
              />
            )}
          </div>
        </div>
      </header>
      {isModalOpen && <AuthModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
