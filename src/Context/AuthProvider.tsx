import React, { useState, createContext } from "react";

interface AuthContextType {
  user: any;
  login?: (user: string, callback: () => void) => void;
}

export let AuthContext = createContext<AuthContextType>(null!);

const fakeAuthProvider = {
  isAuthenticated: false,
  login(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [authToken, setAuthToken] = useState<any>(null);

  const loginUser = async (e: any) => {
    e.preventDefault();
    console.log("Form Submitted");
    const response = fetch("http://127.0.0.1:8000/users/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    const data = await (await response).json();
    console.log(data);
  };

  let value = { user, loginUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
