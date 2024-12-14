import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignInContainer,
  Form,
  SignInTitle,
  SwitchContainer,
} from "../styled/style";
import { ToggleButton } from "../../../components/switch";
import { signIn } from "../../../server/endpoints";

export function SignIn() {
  const [credentials, setCredentials] = useState({ email: "", senha: "" });
  const [loading, setLoading] = useState(false);
  const [isOn, setIsOn] = useState(true);
  const navigate = useNavigate();

  //Trocar para signin para rota signup
  const handleToggle = () => {
    setIsOn((prev) => !prev);
    navigate("/signup");
  };

  // eVento para manipular o input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Criando um eVento para o formulário assim que for preenchido
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await signIn(credentials.email, credentials.senha);
      localStorage.setItem("authToken", response.token);
      localStorage.setItem("authUser", response.user.role);
      navigate("/itens");
    } catch (error) {
      alert("Erro ao fazer o login: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignInContainer>
      <SignInTitle>
        <h2>Login</h2>
        <SwitchContainer>
          <p>Cadastrar</p>
          <ToggleButton isOn={isOn} handle={handleToggle} />
        </SwitchContainer>
      </SignInTitle>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />

        <input
          id="senha"
          type="password"
          name="senha"
          placeholder="Senha"
          value={credentials.senha}
          onChange={handleChange}
          required
        />
        <a>Esqueceu a senha?</a>

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </Form>
    </SignInContainer>
  );
}
