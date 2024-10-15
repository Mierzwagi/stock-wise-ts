import { useState } from "react";
import {
  SignInContainer,
  SignInForm,
  SignInTitle,
  SwitchContainer,
} from "../styled/style";
import { ToggleButton } from "../../../components/switch";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../server/endpoints";

export function SignIn() {
  const [signup, setSignup] = useState({
    email: "",
    senha: "",
  });
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
    setLoading(true);

    try {
      const response = await signIn(signup.email, signup.senha);
      console.log("Resposta do servidor:", response);
      navigate("/");
    } catch (error) {
      const typedError = error as Error;
      setError(typedError.message);
      alert("Erro ao fazer o login");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignup((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <SignInContainer>
      <SignInTitle>
        <h2>Sign In</h2>
        <SwitchContainer>
          <strong>Sign Up</strong>
          <ToggleButton isOn={isOn} handle={handleToggle} />
        </SwitchContainer>
      </SignInTitle>
      <SignInForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="email" 
          placeholder="Email"
          value={signup.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="senha" 
          placeholder="Senha"
          value={signup.senha}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </SignInForm>
    </SignInContainer>
  );
}
