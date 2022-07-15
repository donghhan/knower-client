import styled from "styled-components";
import { useForm } from "react-hook-form";

interface IInputLabel {
  label: string;
  type: string;
}

export default function InputBox({ label, type }: IInputLabel) {
  const { register } = useForm();

  switch (type) {
    case "email":
      return (
        <InputWrapper>
          <label htmlFor={label}>{label}</label>
          <input
            type={type}
            {...register(type, {
              required: "이메일 주소를 입력해 주세요.",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "올바른 형식의 이메일 주소를 입력해 주세요.",
              },
            })}
          />
        </InputWrapper>
      );

    case "password":
      return (
        <InputWrapper>
          <label htmlFor={label}>{label}</label>
          <input
            type={type}
            {...register(type, {
              required: "비밀번호를 입력해 주세요.",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/,
                message:
                  "비밀번호는 8자~16자이어야 하며, 소문자 및 숫자를 최소 1개씩 포함해야 합니다.",
              },
            })}
          />
        </InputWrapper>
      );

    default:
      return (
        <InputWrapper>
          <label htmlFor={label}>{label}</label>
          <input
            type={type}
            {...register(type, {
              required: true,
            })}
          />
        </InputWrapper>
      );
  }
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5em;

  label {
    text-transform: uppercase;
    margin-bottom: 1em;
    font-size: 1.25rem;
  }

  input {
  }
`;
