import { useNavigate } from "react-router-dom";

export function ModalSidebar() {
  const navigate = useNavigate();

  const handleItens = () => {
    navigate("/");
  };

  const handleReport = () => {
    navigate("/reports");
  };

  const handleUser = () => {
    navigate("/users");
  };

  return (
    <div>
        <button onClick={handleItens}>Itens</button>
        <button onClick={handleReport}>Relatórios</button>
        <button onClick={handleUser}>Usuários</button>
    </div>
  )
}
