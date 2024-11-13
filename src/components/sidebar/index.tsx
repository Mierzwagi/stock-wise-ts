import { useNavigate } from "react-router-dom";
import { Button, IconsContainer,  SidebarContainer } from "./style";
import { FaUserLarge, FaFileInvoice, FaBoxOpen } from "react-icons/fa6";
import { useState } from "react";
//import { ModalSidebar } from "../modal/modalSidebar";


export function Sidebar() {
  const navigate = useNavigate();
  const [, setLabel] = useState("");

  const handleItens = () => {
    setLabel("itens");
    navigate("/");
  };

  const handleReport = () => {
    setLabel("reports");
    navigate("/reports");
  };

  const handleUser = () => {
    setLabel("users");
    navigate("/users");
  };

  return (
    <>
      
      <SidebarContainer>
        <h1>Stock Wise</h1>
        <IconsContainer>
          <Button onClick={handleItens} >
            <FaBoxOpen size={30} color="white" />
            <span>Itens</span>
          </Button>
          <Button onClick={handleReport} >
            <FaFileInvoice size={30} color="white" />
            <span>Relatórios</span>
          </Button>
          <Button onClick={handleUser} >
            <FaUserLarge size={30} color="white" />
            <span>Usuários</span>
          </Button>
        </IconsContainer>
      </SidebarContainer>
    </>
  );
}
