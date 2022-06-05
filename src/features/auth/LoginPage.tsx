import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import { Path } from "../../Utils/path";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...userData, email }));
      setEmail("");
      setPassword("");
      navigate(Path.Home);
    } catch (err: any) {
      if (!err?.response) {
        setErrorMessage("서버가 응답하지 않습니다.");
      } else if (err?.response?.status === 400) {
        setErrorMessage("올바른 이메일 주소와 비밀번호를 입력해주세요.");
      } else if (err?.response?.status === 401) {
        setErrorMessage("접근 권한이 없습니다.");
      } else {
        setErrorMessage(
          "알 수 없는 오류가 발생하였습니다. 잠시 후 다시 이용해주세요."
        );
      }
    }
  };

  return (
    <>
      <h1>This is Login Page</h1>
      <p>{errorMessage}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          name="password"
        />
        <button>Login</button>
      </form>
    </>
  );
}
