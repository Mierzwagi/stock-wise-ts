
import { useNavigate } from "react-router-dom";
import { IconsContainer, SidebarContainer } from "./style";
import { ClipboardText, File, User } from "@phosphor-icons/react";

export function Sidebar() {
  const navigate = useNavigate();

  const handleItens = () => {
    navigate("/");
  };

  const handleDash = () => {
    navigate("/signup");
  };

  const handleUser = () => {
    navigate("/users");
  };

  return (
    <SidebarContainer>
      <h1></h1>
      <IconsContainer>
        <button onClick={handleItens}><ClipboardText size={50} color="white" /></button>
        <button onClick={handleDash}><File size={50} color="white" /></button>
        <button onClick={handleUser}><User size={50} color="white" /></button>
      </IconsContainer>
    </SidebarContainer>
  );
}
