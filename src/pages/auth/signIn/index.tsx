import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import {
  SignInContainer,
  SignInForm,
  SignInTitle,
  SwhichConteiner,
} from "../styled/style";
import { ToggleButton } from "../../../components/switch";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../server/endpoints";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [isOn, setIsOn] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    navigate("/signup");
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // fazer requisição para cadastro
    setLoading(true);

    try {
      const response = await signIn(email, senha);
      console.log("Resposta do servidor:", response);
      navigate("/");
    } catch (error) {
      alert("Erro ao fazer o login");
      const typedError = error as Error;
      setError(typedError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignInContainer>
      <SignInTitle>
        <h2>Sign In</h2>
        <SwhichConteiner>
          <strong>Sign Up</strong>
          <ToggleButton isOn={isOn} handle={handleToggle}></ToggleButton>
        </SwhichConteiner>
      </SignInTitle>
      <SignInForm onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button type="submit">Entrar</button>
      </SignInForm>
    </SignInContainer>
  );
}
