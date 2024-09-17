import { createContext, useState, useContext, useEffect } from "react";
import { loginService, registerService } from "../services/authService";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const response = await loginService(email, password);
      console.log("Login response:", response);
      if (response.token) {
        const tokenData = jwtDecode(response.token);
        localStorage.setItem(
          "user",
          JSON.stringify({ ...tokenData, token: response.token })
        );
        setUser({ ...tokenData, token: response.token });
        return { ok: true, message: "Successful login" };
      }
      return { ok: false, message: response.message || "Login failed" };
    } catch (error) {
      return { ok: false, message: error.message || "An error occurred" };
    }
  };

  const register = async ({ email, password, firstName, lastName }) => {
    try {
      const response = await registerService({
        email,
        password,
        firstName,
        lastName,
      });
      if (response.id) {
        return { ok: true, message: 'Successfull registration' };
      } else {
        return { ok: false, message: 'Email already in use' };
      }
    } catch (err) {
      if (err.message === 'Email already in use') {
        return { ok: false, message: 'Email already in use' };
      }
      return {
        ok: false,
        message: 'Something went wrong. Try again later!',
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const lsUser = localStorage.getItem("user");
    if (lsUser) {
      const user = JSON.parse(lsUser);
      const today = Math.floor(Date.now() / 1000);
      if (today >= user.exp) {
        logout();
      } else {
        setUser(user);
      }
    }
    setIsLoading(false);
  }, []);

  const value = { user, setUser, login, register, logout, isLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
