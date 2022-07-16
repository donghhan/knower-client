import InnerSection from "../../Components/InnerSection";
import SectionTitle from "../../Components/form/SectionTitle";
import FormBox from "../../Components/form/FormBox";
import InputBox from "../../Components/form/InputBox";
import FormButton from "../../Components/form/FormButton";

interface ISignupForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  homeNumber?: string;
  mobileNumber: string;
}

export default function Signup() {
  return (
    <InnerSection>
      <SectionTitle titleText="Signup" />
      <FormBox>
        <InputBox label="email*" type="email" />
        <InputBox label="password*" type="password" />
        <InputBox label="confirm password*" type="password" />
        <InputBox
          label="home phone"
          type="text"
          placeholder="-는 빼고 적어주세요."
        />
        <InputBox
          label="mobile phone*"
          type="text"
          placeholder="-는 빼고 적어주세요."
        />
        <FormButton buttonText="Signup" />
      </FormBox>
    </InnerSection>
  );
}
