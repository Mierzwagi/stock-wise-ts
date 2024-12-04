import { useState } from "react";
import {
  SignInContainer,
  Form,
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
  const [, setError] = useState<string | null>(null);
  const [isOn, setIsOn] = useState(true);

  const navigate = useNavigate();

  //Trocar para signin para rota signup
  const handleToggle = () => {
    setIsOn((prev) => !prev);
    navigate("/signup");
  };

  // Criando um eVento para o formulário assim que for preenchido
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await signIn(signup.email, signup.senha);
      console.log("Resposta do servidor:", response);

      localStorage.setItem("authToken", response.token);
      localStorage.setItem("authUser", response.user.role);

      navigate("/itens");
    } catch (error) {
      const typedError = error as Error;
      setError(typedError.message);
      alert("Erro ao fazer o login");
    } finally {
      setLoading(false);
    }
  };

  // eVento para manipular o input
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
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={signup.email}
          onChange={handleChange}
          required
        />

        <input
          id="senha"
          type="password"
          name="senha"
          placeholder="Senha"
          value={signup.senha}
          onChange={handleChange}
          required
        />
        {/* <a>Esqueceu a senha?</a> */}

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </Form>
    </SignInContainer>
  );
}
