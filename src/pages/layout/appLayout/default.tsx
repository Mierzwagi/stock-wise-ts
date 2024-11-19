import { Sidebar } from "../../../components/sidebar";
import { ContainerLayout } from "../../../components/containerList";
import { Outlet } from "react-router-dom";
import { ButtonSidebar, DefaultConatiner } from "./style";
import { useState } from "react";
import {  FaBars } from "react-icons/fa6";

export function Default() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const approved = window.innerWidth <= 1200;

  // Função para fechar a sidebar
  const handleOptionSelect = () => {
    if (approved) {
      setOpenSidebar(false);
    }
  };
  
  return (
    <DefaultConatiner>
      {approved && (
        <ButtonSidebar onClick={() => setOpenSidebar(!openSidebar)}><FaBars size={20} color={openSidebar ? "#ffff" : "#5907AF"}/></ButtonSidebar>
      )}
      {(!approved || openSidebar) && <Sidebar onOptionSelect = {handleOptionSelect}/>}
      <ContainerLayout>
        <Outlet />
      </ContainerLayout>
    </DefaultConatiner>
  );
}
