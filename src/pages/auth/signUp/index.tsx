import { useState } from "react";
import {
  SignInContainer,
  SignInForm,
  SignInTitle,
  SwhichConteiner,
} from "./style";
import { ToggleButton } from "../../../components/switch";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [isOn, setIsOn] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    navigate("/signin");
  };
  return (
    <SignInContainer>
      <SignInTitle>
        <h2>Sign Up</h2>
        <SignInForm action="">
          <input type="text" placeholder="Nome" required />
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </SignInForm>
      </SignInTitle>
      <SwhichConteiner>
        <strong>Sign In</strong>
        <ToggleButton isOn={isOn} handle={handleToggle}></ToggleButton>
      </SwhichConteiner>
      ;
    </SignInContainer>
  );
}
