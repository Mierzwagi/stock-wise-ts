import { useState } from "react";
import {
  SignInContainer,
  Form,
  SignInTitle,
  SwitchContainer,
} from "../styled/style";
import { ToggleButton } from "../../../components/switch";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../server/endpoints";

export function SignUp() {
  console.log("Componente SignUp renderizado");

  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [loading, setLoading] = useState(false);
  const [, setError] = useState<string | null>(null);
  const [isOn, setIsOn] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    navigate("/");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await signUp(userData);
      console.log("Resposta do servidor:", response);
      navigate("/");
    } catch (error) {
      const typedError = error as Error;
      setError(typedError.message);
      alert("Erro ao cadastrar usuário");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <SignInContainer>
      <SignInTitle>
        <h2>Crie sua Conta</h2>
        <SwitchContainer>
          <p>Login</p>
          <ToggleButton isOn={isOn} handle={handleToggle} />
        </SwitchContainer>
      </SignInTitle>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={userData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={userData.senha}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Criando..." : "Criar"}
        </button>
      </Form>
    </SignInContainer>
  );
}
