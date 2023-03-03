import { useState } from "react";
import { axiosPost } from "../api";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const signIn = (username: string, password: string) => {
    return axiosPost("/login", { username, password });
  };
  const signUp = () => {};
  const signOut = () => {};
  const sendPasswordReset = () => {};
  return {
    user,
    signIn,
    signUp,
    signOut,
    sendPasswordReset,
  };
};
