import React, { useContext, useState } from "react";
import {
  useNavigate,
  useLocation,
  NavigateFunction,
  Location,
} from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAuth from "../../Hooks/Auth/useAuth";

interface ILocationState {
  from: { pathname: string };
}

export default function Login() {
  const navigate: NavigateFunction = useNavigate();
  const { state } = useLocation<ILocationState>();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Put your email here"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <input
        type="password"
        name="password"
        placeholder="Put your password here"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
    </form>
  );
}
