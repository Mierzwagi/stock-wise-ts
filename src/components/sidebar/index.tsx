
import { useNavigate } from "react-router-dom";
import { IconsContainer, SidebarContainer } from "./style";
import { FaUserLarge, FaFileInvoice, FaBoxOpen } from "react-icons/fa6";

export function Sidebar() {
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
    <SidebarContainer>
      <h1></h1>
      <IconsContainer>
        <button onClick={handleItens}><FaBoxOpen size={50} color="white" /></button>
        <button onClick={handleReport}><FaFileInvoice size={50} color="white" /></button>
        <button onClick={handleUser}><FaUserLarge size={50} color="white" /></button>
      </IconsContainer>
    </SidebarContainer>
  );
}
