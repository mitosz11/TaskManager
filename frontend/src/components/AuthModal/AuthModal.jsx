import { useState } from 'react';
import { FaLock, FaUserPlus } from 'react-icons/fa';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Modal from './Modal';

export default function AuthModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');

  const switchToLogin = (email) => {
    setEmail(email);
    setActiveTab('login');
  };

  return (
    <Modal onClose={onClose}>
      <div className="bg-gray-200 shadow-md rounded-lg overflow-hidden w-96 animate-fadeIn">
        <div className="flex justify-between items-center p-4 text-gray-600">
          <div
            className={`w-1/2 text-center p-2 cursor-pointer font-bold uppercase ${
              activeTab === "login"
                ? "border-b-2 border-cyan-700 text-cyan-700"
                : ""
            }`}
            onClick={() => setActiveTab("login")}
          >
            <FaLock className="inline-block mr-2" />
            Login
          </div>
          <div
            className={`w-1/2 text-center p-2 cursor-pointer font-bold uppercase ${
              activeTab === "register"
                ? "border-b-2 border-cyan-700 text-cyan-700"
                : ""
            }`}
            onClick={() => setActiveTab("register")}
          >
            <FaUserPlus className="inline-block mr-2" />
            Register
          </div>
        </div>
        <div className="p-4">
          {activeTab === "login" ? (
            <LoginForm onClose={onClose} email={email} />
          ) : (
            <RegistrationForm onClose={onClose} switchToLogin={switchToLogin} />
          )}
        </div>
      </div>
    </Modal>
  );
}
