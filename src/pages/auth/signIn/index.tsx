import { useState } from "react";
import {
  SignInContainer,
  SignInForm,
  SignInTitle,
  SwhichConteiner,
} from "./style";
import { ToggleButton } from "../../../components/switch";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const [isOn, setIsOn] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    navigate("/signup");
  };
  return (
    <SignInContainer>
      <SignInTitle>
        <h2>Sign In</h2>
        <SignInForm action="">
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </SignInForm>
      </SignInTitle>
      <SwhichConteiner>
        <strong>Sign Up</strong>
        <ToggleButton isOn={isOn} handle={handleToggle}></ToggleButton>
      </SwhichConteiner>
      ;
    </SignInContainer>
  );
}


