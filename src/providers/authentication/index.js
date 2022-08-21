import { createContext, useCallback, useContext, useState } from "react";
import { api } from "../../api";

const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = async ({ children }) => {
  const [data, setData] = useState(() => {
    const accessToken = localStorage.getItem("@anthorFlix:accessToken");
    const user = localStorage.getItem("@anthorFlix:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {};
  });

  const logIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/users/login", { email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@kenzieburger:accessToken", accessToken);
    localStorage.setItem("@kenzieburger:user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);
};
