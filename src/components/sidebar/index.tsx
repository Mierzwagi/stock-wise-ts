import { useNavigate } from "react-router-dom";
import { Button, IconsContainer, SidebarContainer } from "./style";
import { FaUserLarge, FaFileInvoice, FaBoxOpen } from "react-icons/fa6";
import { useEffect } from "react";

interface SidebarProps {
  onOptionSelect?: () => void;
}

//Coverte a string e acessar a propriedade role do user

export function Sidebar({ onOptionSelect }: SidebarProps) {
  const userRole = localStorage.getItem("authUser");

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

  useEffect(() => {
    console.log("userRole", userRole);
  }, [userRole]);

  return (
    <>
      <SidebarContainer>
        <h1>Stock Wise</h1>
        <IconsContainer>
          <Button onClick={handleItens}>
            <FaBoxOpen />
            <span>Itens</span>
          </Button>
          {userRole === "ADMIN" && (
            <Button onClick={handleReport}>
              <FaFileInvoice />
              <span>Relatórios</span>
            </Button>
          )}
          {userRole === "ADMIN" && (
            <Button onClick={handleUser}>
              <FaUserLarge />
              <span>Usuários</span>
            </Button>
          )}
        </IconsContainer>
        <h4>
          <a href="">Test</a>
        </h4>
      </SidebarContainer>
    </>
  );
}
