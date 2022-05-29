import React, { createContext, useState } from "react";

interface AuthContextType {
  user: any;
  login: (user: string, callback: () => void) => void;
  logout: (callback: () => void) => void;
}

interface IAuthProvider {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>();

export function AuthProvider({ children }: IAuthProvider) {
  const [auth, setAuth] = useState({});

  return <AuthContext.provider></AuthContext.provider>;
}

export default AuthContext;
