import { useNavigate } from "react-router-dom";
import { Button, IconsContainer,  SidebarContainer } from "./style";
import { FaUserLarge, FaFileInvoice, FaBoxOpen } from "react-icons/fa6";

interface SidebarProps{
  onOptionSelect?: () => void;
}

export function Sidebar({onOptionSelect}: SidebarProps) {
  const navigate = useNavigate();
 

  const handleItens = () => {
    onOptionSelect?.();
    navigate("/");
  };

  const handleReport = () => {
    onOptionSelect?.();
    navigate("/reports");
  };

  const handleUser = () => {
    onOptionSelect?.();
    navigate("/users");
  };

  return (
    <>
      
      <SidebarContainer>
        <h1>Stock Wise</h1>
        <IconsContainer>
          <Button onClick={handleItens} >
            <FaBoxOpen  />
            <span>Itens</span>
          </Button>
          <Button onClick={handleReport} >
            <FaFileInvoice  />
            <span>Relatórios</span>
          </Button>
          <Button onClick={handleUser} >
            <FaUserLarge />
            <span>Usuários</span>
          </Button>
        </IconsContainer>
      </SidebarContainer>
    </>
  );
}
