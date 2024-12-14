import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignInContainer,
  Form,
  SignInTitle,
  SwitchContainer,
} from "../styled/style";
import { ToggleButton } from "../../../components/switch";
import { signUp } from "../../../server/endpoints";

export function SignUp() {
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [loading, setLoading] = useState(false);
  const [isOn, setIsOn] = useState(false);  
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await signUp(userData);
      console.log("Resposta do servidor:", response);
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      alert("Erro ao cadastrar usuário: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
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
