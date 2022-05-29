import React from "react";
import { useNavigate, useLocation } from "react-router";
import useAuth from "../../Hooks/Auth/useAuth";

export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Put your email here" />
      <input
        type="password"
        name="password"
        placeholder="Put your password here"
      />
    </form>
  );
}

function AuthStauts() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }
}
