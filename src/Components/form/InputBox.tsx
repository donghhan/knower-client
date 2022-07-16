import styled from "styled-components";
import { useForm } from "react-hook-form";

interface IInputBox {
  label: string;
  type: string;
  placeholder?: string;
}

export default function InputBox({ label, type, placeholder }: IInputBox) {
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
            placeholder={placeholder}
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
            placeholder={placeholder}
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
            placeholder={placeholder}
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
  }

  input {
    &:placeholder {
      font-size: 1rem;
    }
  }
`;
