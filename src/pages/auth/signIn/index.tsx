import { useState } from "react"; 
import {
  PasswordInput,
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
      navigate("/");
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
      <SignInForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={signup.email}
          onChange={handleChange}
          required
        />
        <PasswordInput>
          <input
            id="senha"
            type="password"
            name="senha"
            placeholder="Senha"
            value={signup.senha}
            onChange={handleChange}
            required
          />
         {/*  <FaEye
          id="btn-senha"
            size={20}
            color="#808080"
            style={{ position: "absolute", left: "40%" }}
          /> */}
        </PasswordInput>

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </SignInForm>
    </SignInContainer>
  );
}
