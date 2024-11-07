import { useNavigate } from "react-router-dom";
import { Button, IconsContainer, SidebarContainer } from "./style";
import { FaUserLarge, FaFileInvoice, FaBoxOpen } from "react-icons/fa6";
import { useState } from "react";
import { ModalSidebar } from "../modal/modalSidebar";


export function Sidebar() {
  const navigate = useNavigate();
  const [label, setLabel] = useState("");

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
        <h1></h1>
        <IconsContainer>
          <Button onClick={handleItens} variant={label === "itens"}>
            <FaBoxOpen size={50} color="white" />{" "}
            {label === "itens" && <span>Itens</span>}
          </Button>
          <Button onClick={handleReport} variant={label === "reports"}>
            <FaFileInvoice size={50} color="white" />
            {label === "reports" && <span>Relatórios</span>}
          </Button>
          <Button onClick={handleUser} variant={label === "users"}>
            <FaUserLarge size={50} color="white" />
            {label === "users" && <span>Usuários</span>}
          </Button>
        </IconsContainer>
        <ModalSidebar />
      </SidebarContainer>
    </>
  );
}
