import { useState } from "react";
import {
  SignInContainer,
  SignInForm,
  SignInTitle,
  SwhichConteiner,
} from "../styled/style";
import { ToggleButton } from "../../../components/switch";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../server/endpoints";

export function SignUp() {
  console.log("Componente SignUp renderizado");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);

  const [isOn, setIsOn] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    navigate("/signin");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // fazer requisição para cadastro
    console.log("Navegando para signin");
    setLoading(true);

    try {
      const response = await signUp({ nome, email, senha });
      console.log("Resposta do servidor:", response);
      navigate("/signin");
    } catch (error) {
      alert("Erro ao cadastrar usuário");
      const typedError = error as Error;
      setError(typedError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignInContainer>
      <SignInTitle>
        <h2>Sign Up</h2>
        <SwhichConteiner>
          <strong>Sign In</strong>
          <ToggleButton isOn={isOn} handle={handleToggle}></ToggleButton>
        </SwhichConteiner>
      </SignInTitle>
      <SignInForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          Criar
        </button>
      </SignInForm>
    </SignInContainer>
  );
}
