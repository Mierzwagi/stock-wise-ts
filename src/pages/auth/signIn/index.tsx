import { useState } from "react";
import { SignInContainer, SignInForm, SignInTitle, SwhichConteiner, Toggle } from "./style";

export function SignIn() {
  const [isOn, setIsOn] = useState(true);
  const handleToggle = () => setIsOn((prev) => !prev);
  return (
    <SignInContainer>
      <SignInTitle>
        <h2>Sign In</h2>
        <SignInForm action="">
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
          <div>
            <a href="#">Esqueceu a senha?</a>
          </div>
        </SignInForm>
      </SignInTitle>
      <SwhichConteiner>
        <strong>Sign Up</strong>
        <ToggleButton isOn={isOn} handle={handleToggle} />
      </SwhichConteiner>
      ;
    </SignInContainer>
  );
}

interface ToggleButtonProps {
  isOn: boolean;
  handle: () => void;
}
const ToggleButton = ({ isOn, handle }: ToggleButtonProps) => {
  return <Toggle isOn={isOn} onClick={handle} />;
};
