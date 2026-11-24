import { createContext, useContext, useState } from 'react';
import * as authService from '../services/authService.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => authService.getSession());

  const login = (email, password) => setUser(authService.login(email, password));
  const signUp = (data) => authService.signUp(data);
  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, signUp, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
