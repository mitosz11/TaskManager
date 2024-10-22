import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';

export default () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
      >
        {theme === "light" ? (
          <FaMoon className="text-black text-2xl dark:text-white" />
        ) : (
          <FaSun className="text-black text-2xl dark:text-yellow-500" />
        )}
      </button>
    );
};
